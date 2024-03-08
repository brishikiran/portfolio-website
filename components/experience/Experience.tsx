import React from "react";
import { experiences } from "@/data/content/experience";

function Experience() {
  return (
    <div className="max-w-5xl m-auto">
      
      {experiences.map((experience, index) => (
        <div key={index} className="mb-10 bg-black border border-gray-800 p-5 rounded-lg text-white flex items-center">
          {/* Company Logo */}
          <img src={experience.logo} alt={`${experience.company} Logo`} className="w-20 h-20 mr-8 rounded-lg" />

          {/* Job Role and Company Details */}
          <div>
            <h3 className="text-xl font-bold">{experience.jobRole}</h3>
            <p className="text-lg">{experience.company} · {experience.employmentType}</p>
            <p className="text-sm text-gray-500">{experience.startDate} - {experience.endDate} · {experience.duration}</p>
            <p className="text-sm text-gray-500">{experience.location}</p>

            {/* Job Responsibilities and Achievements */}
            <ul className="list-none pl-0 mt-4">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm ml-4">{responsibility}</li>
              ))}
            </ul>
            {/* Skills */}
            <div className="mt-4">
              <p className="text-sm font-bold">Skills:</p>
              <p className="text-sm">{experience.skills.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
