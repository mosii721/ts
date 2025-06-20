import type { Job, FilterType } from '../types';

interface JobListingsProps {
  jobs: Job[];
  onFilterChange: (filter: FilterType) => void;
}

export default function JobListings({ jobs, onFilterChange }: JobListingsProps) {

return (
    <div className="grid grid-cols-1 gap-6 py-8">
      {jobs.map(job => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center gap-6 relative border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center gap-2 flex-1">
            <img src={job.logo} alt='logo' className="w-16 h-16 md:w-20 md:h-20  md:mt-0"/>
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-4">
                <h2 className="text-primary font-bold text-teal-500">{job.company}</h2>
                <div className="flex gap-2">
                  {job.new && (
                    <span className="bg-primary bg-teal-500 text-white text-xs uppercase px-2 py-1 rounded-full"> New! </span>
                  )}
                  {job.featured && (
                    <span className="bg-teal-900 text-white text-xs uppercase px-2 py-1 rounded-full"> Featured </span>
                  )}
                </div>
              </div>
              <h3 className="text-veryDark font-bold  text-lg hover:text-primary cursor-pointer transition-colors"> {job.position} </h3>
              <div className="flex gap-4 text-dark text-sm text-gray-400">
                <span>{job.postedAt}</span>
                <span>•</span>
                <span>{job.contract}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 md:border-0 md:pt-0">
            <div className="flex flex-wrap gap-4">
              {[job.role, job.level, ...(job.languages || []), ...(job.tools || [])].map(
                (category, i) => (
                  <button key={i} onClick={() => onFilterChange(category)} className="bg-filter text-primary font-bold px-3 py-1 text-teal-500 rounded hover:bg-primary hover:text-white hover:bg-teal-500 transition-colors"> {category} </button>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}