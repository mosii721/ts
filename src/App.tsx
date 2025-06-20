import { useEffect, useState } from 'react';
import type { Job, FilterType } from './types';
import FilterBar from './components/FilterBar';
import JobListings from './components/JobListings';
import data from './data.json';


function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<FilterType[]>([]);

    useEffect(() => {
    setJobs(data);
  }, []);

  const addFilter = (filter: FilterType) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: FilterType) => {
    setFilters(filters.filter(f => f !== filter));
  };

  const clearFilters = () => setFilters([]);

  const filteredJobs = jobs.filter(job => {
    const all = [ job.role, job.level, ...job.languages , ...job.tools ];
    return filters.every((filter) => all.includes(filter));
  });

  return (
    <div className="min-h-screen bg-teal-50 transition-colors duration-300 text-black">
      <div className="bg-teal-400 pb-32"></div>
      <div className="max-w-7xl mx-auto px-6 py-6 -mt-16">
        
        <div className="mb-6">
          {filters.length > 0 && (
            <FilterBar  filters={filters} onRemoveFilter={removeFilter} clearFilters={clearFilters} />
          )}
        </div>
        <JobListings  jobs={filteredJobs} onFilterChange={addFilter} />
      </div>
    </div>
  );
}

export default App;