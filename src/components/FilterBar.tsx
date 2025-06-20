import type { FilterType } from '../types';

interface FilterBarProps {
  filters: FilterType[];
  onRemoveFilter: (filter: FilterType) => void;
  clearFilters: () => void;
}

export default function FilterBar({ filters, onRemoveFilter, clearFilters }: FilterBarProps) {
  return (
    <div className=" bg-white p-4 rounded-lg shadow-lg flex items-center justify-between -mt-8 mb-8 border border-teal-100">
      <div className="flex flex-wrap gap-4">
        {filters.map(filter => (
          <div key={filter} className="flex items-center rounded bg-teal-100">
            <span className="text-primary font-bold px-3 py-1">{filter}</span>
            <button onClick={() => onRemoveFilter(filter)} className=" bg-teal-500 hover:bg-teal-900 text-white  px-2 py-1 rounded-r transition-colors" aria-label={`Remove ${filter} filter`} > × </button>
          </div>
        ))}
      </div>
      <button onClick={clearFilters} className="text-dark hover:text-primary hover:underline font-medium" > Clear </button>
    </div>
  );
}