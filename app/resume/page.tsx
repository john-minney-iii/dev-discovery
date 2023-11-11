import type { NextPage } from "next";
import type { FC } from "react";

import {
    workExperiences,
    type WorkExperienceType,
    educationExperiences,
    type EducationType,
    skills
} from "@/src/data/resume";

const WorkExperienceDetail: FC<{ workExperience: WorkExperienceType }> = ({ workExperience }) => {
    const {
        companyName,
        title,
        startDate,
        endDate,
        jobDescription
    } = workExperience;

    return (
        <div className="max-w-[45rem] p-4">
            <p><span className="font-bold">{companyName}</span> - {title}</p>
            <p className="text-gray-500">{startDate} - {endDate}</p>
            <ul className="list-disc ml-10">
                {jobDescription.map((description, index) => (
                    <li key={`${index}-${description}`}>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const EducationDetail: FC<{ education: EducationType }> = ({ education }) => {
    const {
        school,
        degree,
        startDate,
        endDate
    } = education;

    return (
        <div className="max-w-[45rem] p-4">
            <p><span className="font-bold">{school}</span> - {degree}</p>
            <p className="text-gray-500">{startDate} - {endDate}</p>
        </div>
    );
};

const ResumePage: NextPage = () => {
    return (
        <div className="w-full min-h-[90vh] p-10 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl md:text-5xl">John Minney III</h1>
            <div className="flex flex-col md:flex-row gap-10 mt-5">
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-5">
                        <h4 className="font-bold text-4xl md:text-5xl">Experience</h4>
                        {workExperiences.map((workExperience, index) => (
                            <WorkExperienceDetail key={`${index}-${workExperience.title}`} workExperience={workExperience} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h4 className="font-bold text-4xl md:text-5xl">Education</h4>
                        {educationExperiences.map((education, index) => (
                            <EducationDetail key={`${index}-${education.school}`} education={education} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold text-4xl md:text-5xl mb-3">Skills</h4>
                    <ul className="list-disc ml-10">
                        {skills.map((skill, index) => (
                            <li key={`${index}-${skill}`}><p>{skill}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;
