// Career Page
"use client";

import CareerBackground from "@/components/CareerBackground";
import MissionStatement from "@/components/MissionStatement";
import JoinBamsTeamSection from "@/components/JoinBamsTeamSection";
import JobListingsSection, { Job } from "@/components/JobListingsSection";

// Sample job data - replace with actual API call
const getJobs = (): Job[] => {
  return [
    {
      id: "1",
      title: "Office staff",
      category: "Office",
      workingHours: "9am - 5pm",
      contract: "No",
      salary: "Negotiate",
      closeDate: "18 Dec 2025",
    },
    {
      id: "2",
      title: "Office staff",
      category: "Office",
      workingHours: "9am - 5pm",
      contract: "No",
      salary: "Negotiate",
      closeDate: "18 Dec 2025",
    },
    {
      id: "3",
      title: "Office staff",
      category: "Office",
      workingHours: "9am - 5pm",
      contract: "No",
      salary: "Negotiate",
      closeDate: "18 Dec 2025",
    },
  ];
};

const missionText =
  "We're fast moving team that stive to offer the best Asian food in Thailand. We're looking for those who share the same values: quality, dedication, and velocity, with us.";

export default function CareerPage() {
  const jobs = getJobs();

  const handleApply = (jobId: string) => {
    console.log("Apply for job:", jobId);
    // Implement application logic here
  };

  return (
    <CareerBackground>
      <div className="min-h-screen w-full overflow-x-hidden">
        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
          {/* Mission Statement */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <MissionStatement text={missionText} />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-start">
            {/* Left Column - Join Bam's Team */}
            <div className="w-full lg:max-w-[273px]">
              <JoinBamsTeamSection />
            </div>

            {/* Right Column - Job Listings */}
            <div className="w-full">
              <JobListingsSection jobs={jobs} onApply={handleApply} />
            </div>
          </div>
        </div>
      </div>
    </CareerBackground>
  );
}
