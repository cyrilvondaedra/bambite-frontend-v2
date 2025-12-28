// Job Detail Page
"use client";

import { useParams, useRouter } from "next/navigation";
import JobDetailBackground from "@/components/JobDetailBackground";
import BackButton from "@/components/BackButton";
import JobDetailContent from "@/components/JobDetailContent";
import JobDetailsCard from "@/components/JobDetailsCard";
import ApplyNowButton from "@/components/ApplyNowButton";

// Sample job data - replace with actual API call
const getJobById = (id: string) => {
  const jobs: Record<
    string,
    {
      id: string;
      title: string;
      category: string;
      workingHours: string;
      contract: string;
      salary: string;
      closeDate: string;
      tasks: string[];
      qualifications: string[];
    }
  > = {
    "1": {
      id: "1",
      title: "Office Staff",
      category: "Office",
      workingHours: "9am - 5pm",
      contract: "No",
      salary: "Negotiate",
      closeDate: "18 Dec 2025",
      tasks: [
        "Handle data entry and record keeping, maintaining important information accurately.",
        "Manage email correspondence, scheduling, and calendar management.",
        "Prepare documents, organize filing systems, and operate office equipment.",
        "Provide meeting support and communication, including responding to customer inquiries.",
        "Oversee office supplies and assist with general administrative workflows.",
      ],
      qualifications: [
        "Strong computer and digital skills.",
        "Proficiency in English and Thai; Thai language ability is an advantage.",
        "Ability to work well with others, manage time effectively, and perform tasks with accuracy and attention to detail.",
      ],
    },
    "2": {
      id: "2",
      title: "Office Staff",
      category: "Office",
      workingHours: "9am - 5pm",
      contract: "No",
      salary: "Negotiate",
      closeDate: "18 Dec 2025",
      tasks: [
        "Handle data entry and record keeping, maintaining important information accurately.",
        "Manage email correspondence, scheduling, and calendar management.",
        "Prepare documents, organize filing systems, and operate office equipment.",
        "Provide meeting support and communication, including responding to customer inquiries.",
        "Oversee office supplies and assist with general administrative workflows.",
      ],
      qualifications: [
        "Strong computer and digital skills.",
        "Proficiency in English and Thai; Thai language ability is an advantage.",
        "Ability to work well with others, manage time effectively, and perform tasks with accuracy and attention to detail.",
      ],
    },
    "3": {
      id: "3",
      title: "Office Staff",
      category: "Office",
      workingHours: "9am - 5pm",
      contract: "No",
      salary: "Negotiate",
      closeDate: "18 Dec 2025",
      tasks: [
        "Handle data entry and record keeping, maintaining important information accurately.",
        "Manage email correspondence, scheduling, and calendar management.",
        "Prepare documents, organize filing systems, and operate office equipment.",
        "Provide meeting support and communication, including responding to customer inquiries.",
        "Oversee office supplies and assist with general administrative workflows.",
      ],
      qualifications: [
        "Strong computer and digital skills.",
        "Proficiency in English and Thai; Thai language ability is an advantage.",
        "Ability to work well with others, manage time effectively, and perform tasks with accuracy and attention to detail.",
      ],
    },
  };

  return jobs[id] || jobs["1"];
};

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = (params?.id as string) || "1";
  const job = getJobById(jobId);

  if (!job) {
    router.push("/career");
    return null;
  }


  return (
    <JobDetailBackground>
      <div className="min-h-screen w-full">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Back Button */}
          <div className="mb-6 sm:mb-8">
            <BackButton />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
            {/* Left Column - Job Detail Content */}
            <div className="w-full lg:max-w-[600px]">
              <JobDetailContent
                job={{
                  title: job.title,
                  category: job.category,
                  tasks: job.tasks,
                  qualifications: job.qualifications,
                }}
              />
            </div>

            {/* Right Column - Job Details Card */}
            <div className="w-full lg:relative lg:max-w-[298px] lg:ml-auto">
              <JobDetailsCard
                details={{
                  workingHours: job.workingHours,
                  contract: job.contract,
                  salary: job.salary,
                  closeDate: job.closeDate,
                }}
              />
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <ApplyNowButton jobId={job.id} />
          </div>
        </div>
      </div>
    </JobDetailBackground>
  );
}

