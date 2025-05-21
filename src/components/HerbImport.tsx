
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Download, Upload, Database, Code, Copy, RefreshCw, AlertCircle, Check, Leaf } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  parseHerbFile, 
  parseCSV, 
  parseJSON, 
  parseHerbNameList,
  saveHerbsToDatabase, 
  generateTypeScriptCode,
  getCSVTemplate,
  getJSONTemplate,
  formatHerbNamesAsCSV
} from "@/utils/importUtils";

export default function HerbImport() {
  const [activeTab, setActiveTab] = useState<string>("csv");
  const [csvContent, setCsvContent] = useState<string>("");
  const [jsonContent, setJsonContent] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("custom");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [importResult, setImportResult] = useState<{success: boolean, message: string} | null>(null);
  const [simpleHerbList, setSimpleHerbList] = useState<string>("");
  const [showSimpleInput, setShowSimpleInput] = useState<boolean>(false);
  const [herbCount, setHerbCount] = useState<number>(0);
  const csvFileRef = useRef<HTMLInputElement>(null);
  const jsonFileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Fetch the current herb count when component mounts
  useEffect(() => {
    import("@/data/herbs").then(module => {
      setHerbCount(module.herbs.length);
    }).catch(error => {
      console.error("Error fetching herb count:", error);
    });
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, format: "csv" | "json") => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (format === "csv") {
        setCsvContent(content);
      } else {
        setJsonContent(content);
      }
      setImportResult(null);
    };
    reader.readAsText(file);
  };

  // Convert simple herb list to CSV format
  const convertSimpleListToCSV = () => {
    if (!simpleHerbList.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter herb names first",
        variant: "destructive",
      });
      return;
    }

    const herbNames = simpleHerbList
      .split('\n')
      .map(line => line.trim())
      .filter(name => name !== '');
    
    const formattedCSV = formatHerbNamesAsCSV(herbNames);
    setCsvContent(formattedCSV);
    setShowSimpleInput(false);
    
    toast({
      title: "Conversion Complete",
      description: `Converted ${herbNames.length} herb names to CSV format`,
    });
  };

  const handleParseAndSave = async (format: "csv" | "json", destination: "database" | "code") => {
    setIsLoading(true);
    setImportResult(null);
    try {
      const herbs = format === "csv" 
        ? parseCSV(csvContent) 
        : parseJSON(jsonContent);
      
      if (herbs.length === 0) {
        toast({
          title: "No valid herbs found",
          description: "Please check your file and try again",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (destination === "database") {
        const success = await saveHerbsToDatabase(herbs);
        if (success) {
          setImportResult({
            success: true,
            message: `Successfully imported ${herbs.length} herbs to the database.`
          });
        } else {
          setImportResult({
            success: false,
            message: "Failed to import herbs to the database. Check the console for details."
          });
        }
      } else {
        const code = generateTypeScriptCode(herbs, categoryName);
        setGeneratedCode(code);
        setImportResult({
          success: true,
          message: `Generated TypeScript code for ${herbs.length} herbs.`
        });
      }
    } catch (error) {
      toast({
        title: "Import Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
      setImportResult({
        success: false,
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadTemplate = (format: "csv" | "json") => {
    const content = format === "csv" ? getCSVTemplate() : getJSONTemplate();
    const type = format === "csv" ? "text/csv" : "application/json";
    const fileName = format === "csv" ? "herb-template.csv" : "herb-template.json";
    
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "The code has been copied to your clipboard",
      });
    });
  };

  const clearForm = (format: "csv" | "json") => {
    if (format === "csv") {
      setCsvContent("");
      if (csvFileRef.current) csvFileRef.current.value = "";
    } else {
      setJsonContent("");
      if (jsonFileRef.current) jsonFileRef.current.value = "";
    }
    setGeneratedCode("");
    setImportResult(null);
  };

  // Check if the input might be a simple list of herb names
  useEffect(() => {
    if (csvContent) {
      const lines = csvContent.split(/\r?\n/).filter(line => line.trim() !== '');
      const isSimpleList = lines.some(line => {
        const parts = line.split(',');
        return parts.length <= 1 || parts.every(part => part.trim() === '');
      });
      
      if (isSimpleList && !csvContent.includes('scientificName') && !csvContent.includes('description')) {
        toast({
          title: "Simple Herb List Detected",
          description: "Would you like to convert this to a proper CSV format?",
          action: (
            <Button onClick={() => {
              setSimpleHerbList(csvContent);
              setShowSimpleInput(true);
            }}>
              Convert
            </Button>
          )
        });
      }
    }
  }, [csvContent]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Herb Database Bulk Import</h1>
      
      {/* Herb Count Display */}
      <div className="mb-6 bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="text-amber-600 h-5 w-5" />
          <span className="text-amber-800">Current Herb Count:</span>
          <span className="font-bold text-amber-900">{herbCount}</span>
        </div>
        <Button 
          variant="outline" 
          className="bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200"
          onClick={() => {
            import("@/data/herbs").then(module => {
              setHerbCount(module.herbs.length);
              toast({
                title: "Herb Count Refreshed",
                description: `Current herb count: ${module.herbs.length}`,
              });
            });
          }}
        >
          <RefreshCw size={16} className="mr-2" />
          Refresh Count
        </Button>
      </div>
      
      {importResult && (
        <Alert variant={importResult.success ? "default" : "destructive"} className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{importResult.success ? "Import Successful" : "Import Failed"}</AlertTitle>
          <AlertDescription>{importResult.message}</AlertDescription>
        </Alert>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="simple">Simple Name List</TabsTrigger>
          <TabsTrigger value="csv">CSV Import</TabsTrigger>
          <TabsTrigger value="json">JSON Import</TabsTrigger>
        </TabsList>
        
        <TabsContent value="simple" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Import Herbs from Name List</CardTitle>
              <CardDescription>
                Simply enter a list of herb names (one per line) and we'll create template entries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="herbNameList">Herb Names (one per line)</Label>
                  <Textarea 
                    id="herbNameList" 
                    value={simpleHerbList}
                    onChange={(e) => setSimpleHerbList(e.target.value)}
                    placeholder="Chamomile
Lavender
Peppermint"
                    className="font-mono text-sm mt-1 h-64"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Button 
                variant="outline"
                onClick={() => setSimpleHerbList("")}
                className="flex items-center gap-2"
              >
                <RefreshCw size={16} />
                Clear
              </Button>
              <Button 
                onClick={() => {
                  const formattedCSV = formatHerbNamesAsCSV(
                    simpleHerbList
                      .split('\n')
                      .map(line => line.trim())
                      .filter(name => name !== '')
                  );
                  setCsvContent(formattedCSV);
                  setActiveTab("csv");
                }}
                disabled={!simpleHerbList.trim()}
                className="flex items-center gap-2"
              >
                <Check size={16} />
                Convert to CSV Format
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="csv" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Import Herbs from CSV</CardTitle>
              <CardDescription>
                Upload a CSV file with herb data or paste the content directly.
              </CardDescription>
              <Button 
                variant="outline" 
                onClick={() => downloadTemplate("csv")}
                className="flex items-center gap-2 mt-2"
              >
                <Download size={16} />
                Download Template
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="csvFile">Upload CSV File</Label>
                  <Input 
                    id="csvFile" 
                    type="file" 
                    accept=".csv" 
                    ref={csvFileRef}
                    onChange={(e) => handleFileUpload(e, "csv")} 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="csvContent">Or Paste CSV Content</Label>
                  <Textarea 
                    id="csvContent" 
                    value={csvContent}
                    onChange={(e) => setCsvContent(e.target.value)}
                    placeholder="name,scientificName,description,benefits,uses,preparations,dosage,cautions,categories"
                    className="font-mono text-sm mt-1 h-64"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Button 
                variant="outline"
                onClick={() => clearForm("csv")}
                className="flex items-center gap-2"
              >
                <RefreshCw size={16} />
                Clear
              </Button>
              <Button 
                onClick={() => handleParseAndSave("csv", "database")}
                disabled={!csvContent || isLoading}
                className="flex items-center gap-2"
              >
                {isLoading ? "Importing..." : (
                  <>
                    <Database size={16} />
                    Import to Database
                  </>
                )}
              </Button>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-32"
                />
                <Button 
                  variant="secondary"
                  onClick={() => handleParseAndSave("csv", "code")}
                  disabled={!csvContent || isLoading}
                  className="flex items-center gap-2"
                >
                  <Code size={16} />
                  Generate TypeScript
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="json" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Import Herbs from JSON</CardTitle>
              <CardDescription>
                Upload a JSON file with herb data or paste the content directly.
              </CardDescription>
              <Button 
                variant="outline" 
                onClick={() => downloadTemplate("json")}
                className="flex items-center gap-2 mt-2"
              >
                <Download size={16} />
                Download Template
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="jsonFile">Upload JSON File</Label>
                  <Input 
                    id="jsonFile" 
                    type="file" 
                    accept=".json" 
                    ref={jsonFileRef}
                    onChange={(e) => handleFileUpload(e, "json")} 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="jsonContent">Or Paste JSON Content</Label>
                  <Textarea 
                    id="jsonContent" 
                    value={jsonContent}
                    onChange={(e) => setJsonContent(e.target.value)}
                    placeholder='[{"name": "Herb Name", "scientificName": "Scientific Name", ...}]'
                    className="font-mono text-sm mt-1 h-64"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Button 
                variant="outline"
                onClick={() => clearForm("json")}
                className="flex items-center gap-2"
              >
                <RefreshCw size={16} />
                Clear
              </Button>
              <Button 
                onClick={() => handleParseAndSave("json", "database")}
                disabled={!jsonContent || isLoading}
                className="flex items-center gap-2"
              >
                {isLoading ? "Importing..." : (
                  <>
                    <Database size={16} />
                    Import to Database
                  </>
                )}
              </Button>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-32"
                />
                <Button 
                  variant="secondary"
                  onClick={() => handleParseAndSave("json", "code")}
                  disabled={!jsonContent || isLoading}
                  className="flex items-center gap-2"
                >
                  <Code size={16} />
                  Generate TypeScript
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      {generatedCode && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated TypeScript Code</CardTitle>
            <CardDescription>
              Copy this code and add it to your herb data files.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(generatedCode)}
              >
                <Copy size={16} />
              </Button>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-96 text-xs">
                <code>{generatedCode}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
