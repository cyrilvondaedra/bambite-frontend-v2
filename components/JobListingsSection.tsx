// Job Listings Section component
import JobCard from "./JobCard";

export type Job = {
  id: string;
  title: string;
  category: string;
  workingHours: string;
  contract: string;
  salary: string;
  closeDate: string;
};

type JobListingsSectionProps = {
  jobs: Job[];
  onApply?: (jobId: string) => void;
};

export default function JobListingsSection({
  jobs,
  onApply,
}: JobListingsSectionProps) {
  if (!jobs || jobs.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={onApply} />
        ))}
      </div>
    </div>
  );
}

