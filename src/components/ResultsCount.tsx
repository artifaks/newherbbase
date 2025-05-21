
interface ResultsCountProps {
  filteredCount: number;
  totalCount: number;
  selectedCategories: string[];
}

const ResultsCount = ({ filteredCount, totalCount, selectedCategories }: ResultsCountProps) => {
  return (
    <div className="mb-6">
      <p className="text-gray-600">
        Showing {filteredCount} of {totalCount} herbs
        {selectedCategories.length > 0 && (
          <span> in {selectedCategories.length} selected {selectedCategories.length === 1 ? 'category' : 'categories'}</span>
        )}
      </p>
    </div>
  );
};

export default ResultsCount;
