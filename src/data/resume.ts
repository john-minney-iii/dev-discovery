export type WorkExperienceType = {
  companyName: string;
  title: string;
  startDate: string;
  endDate: string;
  jobDescription: string[];
};

export type EducationType = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export const workExperiences: WorkExperienceType[] = [
  {
    companyName: "Lightcast.io",
    title: "Software Engineer",
    startDate: "Dec 2022",
    endDate: "Nov 2023",
    jobDescription: [
      "Frontline team member, responsible for developing creative solutions to enhance the main web application’s marketing presence.",
      "Collaborated with the marketing team to build out a sleek and modern content management system (CMS) using DatoCMS for creating blogs and research reports.",
      "Contributed to the design and implementation of user-friendly features that empowered content creators to showcase the company’s best face on the website.",
      "Completed and received code reviews on all new and refactored code.",
    ],
  },
  {
    companyName: "CNE Creative Enterprises LLC",
    title: "Software Engineer",
    startDate: "Jul 2020",
    endDate: "Dec 2022",
    jobDescription: [
      "Developed robust web applications for internal business use with partnered companies.",
      "Utilized Django and React to lead the implementation of seamless communication with IoT devices, delivering real-time information on various systems to users.",
      "Built out proof of concept projects for various companies in many different technologies.",
    ],
  },
];

export const educationExperiences: EducationType[] = [
  {
    school: "University of Northern Colorado",
    degree: "BS in Software Engineering",
    startDate: "2020",
    endDate: "2022",
  },
  {
    school: "Aims Community College",
    degree: "Associates of Science",
    startDate: "2018",
    endDate: "2020",
  },
];

export const skills: string[] = [
  "SDLC",
  "Agile Methodologies",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Remix.js",
  "Node/Express.js",
  "React Native",
  "Tailwind",
  "Bootstrap",
  "SQL",
  "Github Actions",
  "GitLab CI/CD",
  "Material UI",
];
