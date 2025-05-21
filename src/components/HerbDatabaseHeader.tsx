
import SearchBar from "@/components/SearchBar";

interface HerbDatabaseHeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const HerbDatabaseHeader = ({ onSearch, searchQuery }: HerbDatabaseHeaderProps) => {
  return (
    <div className="bg-herbal-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-4">
          Medicinal Herb Database
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Explore our complete collection of natural herbs and discover their healing benefits.
        </p>
        <div className="max-w-md mx-auto mb-8">
          <SearchBar 
            onSearch={onSearch} 
            value={searchQuery}
            placeholder="Search herbs by name or benefit (e.g., Ginger, Immune, Stress Relief)..." 
          />
        </div>
      </div>
    </div>
  );
};

export default HerbDatabaseHeader;
