
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, ArrowLeft, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SupabaseEbook } from "@/integrations/supabase/models";
import { Progress } from "@/components/ui/progress";

const EbookSuccess = () => {
  const { ebookId } = useParams<{ ebookId: string }>();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [ebook, setEbook] = useState<SupabaseEbook | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const fetchEbookDetails = async () => {
      try {
        if (!ebookId) return;

        const { data, error } = await supabase
          .from("ebooks")
          .select("*")
          .eq("id", ebookId)
          .single();

        if (error) {
          console.error("Error fetching ebook:", error);
          toast({
            title: "Error",
            description: "Could not load the ebook details. Please try again.",
            variant: "destructive",
          });
        } else if (data) {
          setEbook(data);
          
          console.log("Ebook details:", data);
          console.log("File URL from database:", data.file_url);
          
          // If we have a session ID, log it for tracking purposes
          if (sessionId && data) {
            console.log("Purchase completed with session ID:", sessionId);
            console.log("Ebook purchased:", data.title);
          }
        }
      } catch (err) {
        console.error("Failed to get ebook data:", err);
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEbookDetails();
  }, [ebookId, sessionId, toast]);

  const handleDownload = async () => {
    if (!ebook) return;
    
    try {
      setDownloading(true);
      setDownloadProgress(10);
      console.log("Starting download process for:", ebook.title);
      
      // Generate clean filenames based on the ebook title
      const sanitizedTitle = ebook.title.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `${sanitizedTitle}.pdf`;
      
      console.log("Generated sanitized filename:", fileName);
      setDownloadProgress(20);

      // List all files in the ebooks bucket to help debug
      console.log("Listing all files in the ebooks bucket:");
      const { data: bucketFiles, error: listError } = await supabase.storage
        .from('ebooks')
        .list();
        
      if (listError) {
        console.error("Error listing files in bucket:", listError);
      } else {
        console.log("Files in bucket:", bucketFiles.map(f => f.name));
      }

      // Try the direct file_url if available
      let downloadSuccess = false;
      
      if (ebook.file_url) {
        setDownloadProgress(30);
        console.log("Attempting to download using file_url:", ebook.file_url);
        
        try {
          const { data, error } = await supabase.storage
            .from('ebooks')
            .download(ebook.file_url);
            
          if (!error && data) {
            console.log("Successfully downloaded using file_url");
            handleFileDownload(data, fileName);
            setDownloadProgress(100);
            setDownloading(false);
            downloadSuccess = true;
            return;
          } else {
            console.log("Error with direct file_url:", error);
          }
        } catch (err) {
          console.log("Error trying file_url:", err);
        }
      }
      
      // If direct file_url didn't work, try the ebook ID as filename
      if (!downloadSuccess) {
        setDownloadProgress(50);
        console.log("Trying with ebookId as filename:", ebookId);
        
        const possibleExtensions = ['.pdf', '.epub', '.mobi'];
        
        for (const ext of possibleExtensions) {
          try {
            const { data, error } = await supabase.storage
              .from('ebooks')
              .download(`${ebookId}${ext}`);
              
            if (!error && data) {
              console.log(`Success with ${ebookId}${ext}`);
              handleFileDownload(data, fileName);
              setDownloadProgress(100);
              setDownloading(false);
              downloadSuccess = true;
              return;
            }
          } catch (err) {
            console.log(`Error with ${ebookId}${ext}:`, err);
          }
        }
      }
      
      // Try common naming patterns based on the ebook title
      if (!downloadSuccess) {
        setDownloadProgress(70);
        const possibleFilePaths = [
          `${sanitizedTitle}.pdf`,
          `${ebook.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`,
          `${ebookId}/${fileName}`,
        ];
        
        console.log("Trying these file paths:", possibleFilePaths);
        
        for (const path of possibleFilePaths) {
          try {
            console.log(`Trying path: ${path}`);
            const { data, error } = await supabase.storage
              .from('ebooks')
              .download(path);
              
            if (!error && data) {
              console.log(`Success with path: ${path}`);
              handleFileDownload(data, fileName);
              setDownloadProgress(100);
              setDownloading(false);
              downloadSuccess = true;
              return;
            }
          } catch (err) {
            console.log(`Error with path ${path}:`, err);
          }
        }
      }
      
      // If all attempts failed, check if any files exist that might match by looking at their name
      if (!downloadSuccess && bucketFiles && bucketFiles.length > 0) {
        setDownloadProgress(85);
        
        // Find files that might contain parts of the title or ID
        const ebookIdShort = ebookId ? ebookId.substring(0, 8) : '';
        const titleWords = ebook.title.toLowerCase().split(' ');
        
        const potentialMatches = bucketFiles.filter(file => {
          const fileName = file.name.toLowerCase();
          return fileName.includes(ebookIdShort) || 
                 titleWords.some(word => word.length > 3 && fileName.includes(word));
        });
        
        console.log("Potential matching files by name:", potentialMatches);
        
        // Try each potential match
        for (const file of potentialMatches) {
          try {
            const { data, error } = await supabase.storage
              .from('ebooks')
              .download(file.name);
              
            if (!error && data) {
              console.log(`Success with matched file: ${file.name}`);
              handleFileDownload(data, fileName);
              setDownloadProgress(100);
              setDownloading(false);
              downloadSuccess = true;
              return;
            }
          } catch (err) {
            console.log(`Error with matched file ${file.name}:`, err);
          }
        }
      }
      
      // Last resort - create a placeholder PDF
      if (!downloadSuccess) {
        setDownloadProgress(95);
        toast({
          title: "File not found",
          description: `We couldn't locate the ebook file in storage. Please contact support with ID: ${ebookId}`,
          variant: "destructive",
          duration: 7000,
        });
        
        createPlaceholderPDF(ebook, fileName);
        setDownloadProgress(100);
        setDownloading(false);
      }
      
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "There was a problem downloading your ebook. Please try again or contact support.",
        variant: "destructive",
        duration: 5000,
      });
      setDownloading(false);
    }
  };
  
  // Helper function to handle the file download process
  const handleFileDownload = (fileData: Blob, fileName: string) => {
    const url = URL.createObjectURL(fileData);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download successful",
      description: "Your ebook has been downloaded successfully.",
      duration: 3000,
    });
  };
  
  // Helper function to create a placeholder PDF when real one can't be found
  const createPlaceholderPDF = (ebook: SupabaseEbook, fileName: string) => {
    const { title, description } = ebook;
    
    // Create a text content for the placeholder
    const textContent = `
      Title: ${title}
      
      ${description || "No description available."}
      
      This is a placeholder PDF for demonstration purposes.
      In a production environment, this would be the actual ebook content.
      
      The ebook file could not be found in storage.
      Please contact support for assistance with reference to ID: ${ebookId}
    `;
    
    // Create a Blob from text content
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Download the placeholder file
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Sample file generated",
      description: "A sample file has been created. The actual ebook file could not be found in storage.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/ebooks" className="inline-flex items-center text-green-700 hover:text-green-900 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ebooks
          </Link>
          
          <div className="bg-white border border-green-200 rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Purchase!</h1>
            
            {loading ? (
              <p className="text-gray-600 mb-8">Loading your purchase details...</p>
            ) : ebook ? (
              <>
                <p className="text-gray-600 mb-8">
                  You've successfully purchased <span className="font-semibold">{ebook.title}</span>. 
                  Your download is now ready.
                </p>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8 text-left">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Next Steps:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Download className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                      <span>Download your eBook using the button below</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                      <span>You can access this eBook anytime from your account</span>
                    </li>
                  </ul>
                </div>
                
                {downloading && (
                  <div className="mb-6">
                    <p className="mb-2 text-sm text-gray-600">Downloading your eBook...</p>
                    <Progress value={downloadProgress} className="h-2 bg-green-100" />
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-green-700 hover:bg-green-800"
                    onClick={handleDownload}
                    disabled={downloading}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {downloading ? "Downloading..." : "Download eBook"}
                  </Button>
                  
                  <Link to="/ebooks">
                    <Button variant="outline" className="border-green-300 text-green-700">
                      Browse More eBooks
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <p className="text-gray-600 mb-8">
                  We couldn't find details for this purchase. If you've just completed your purchase,
                  it may take a few moments to process.
                </p>
                <Link to="/ebooks">
                  <Button className="bg-green-700 hover:bg-green-800">
                    Browse eBooks
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Herbal Wisdom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EbookSuccess;
