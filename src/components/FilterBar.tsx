import type { FilterType } from '../types';

interface FilterBarProps {
  filters: FilterType[];
  onFilterChange: (filter: FilterType) => void;
  clearFilters: () => void;
}

export default function FilterBar({ filters, onFilterChange, clearFilters }: FilterBarProps) {
  return (
    <div className=" bg-white p-4 rounded-lg shadow-lg flex items-center justify-between -mt-8 mb-8 border border-teal-100">
      <div className="flex flex-wrap gap-4">
        {filters.map(filter => (
          <div key={filter} className="flex items-center bg-filter rounded bg-teal-100">
            <span className="text-primary font-bold px-3 py-1">{filter}</span>
            <button
              onClick={() => onFilterChange(filter)}
              className="bg-primary bg-teal-500 hover:bg-teal-900 text-white  px-2 py-1 rounded-r hover:bg-veryDark transition-colors"
              aria-label={`Remove ${filter} filter`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearFilters}
        className="text-dark hover:text-primary hover:underline font-medium"
      >
        Clear
      </button>
    </div>
  );
}