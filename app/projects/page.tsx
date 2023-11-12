import type { NextPage } from "next";
import type { FC } from "react";
import Image from "next/image";

import {
    projects,
    type Project
} from "@/src/data/projects";

const ProjectDetail: FC<{ project: Project }> = ({ project }) => {
    const { title, company, descriptions, imageUrl } = project;

    return (
        <div className="flex flex-col md:flex-row gap-10 max-w-[75rem] p-10">
            <div className="w-full md:w-50 flex justify-center items-center">
                <Image
                    src={imageUrl}
                    alt={`${title} screenshot`}
                    quality={100}
                    width={700}
                    height={600}
                    className="rounded-xl"
                />
            </div>
            <div className="w-full md:w-50 flex flex-col justify-center">
                <p className="text-2xl md:text-3xl"><span className="text-cyan">{title}</span> - {company}</p>
                <ul className="list-disc ml-10 mt-3">
                    {descriptions.map((description, index) => (
                        <li key={`${index}-${description}`}>{description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const ProjectsPage: NextPage = () => {
    return (
        <div className="w-full flex flex-col gap-y-10 justify-center items-center py-14">
            <h1 className="text-3xl md:text-5xl">Check out my Projects!</h1>
            <div className="flex flex-col px-10">
                {projects.map((project, index) => (
                    <ProjectDetail key={`${index}-${project.title}`} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
