export type Project = {
  title: string;
  company: string;
  descriptions: string[];
  imageUrl: string;
};

export const projects: Project[] = [
  {
    title: "Marketing Site",
    company: "Lightcast.io",
    descriptions: [
      "Played a key role in the development and continuous maintenance of Lightcast’s marketing website, utilizing Next.js and a state-of-the-art headless CMS system.",
      "Empowered content creators by facilitating seamless creation and publication of blogs, research articles, and webinars through an intuitive CMS interface.",
      "Leveraged custom React components and Next.js server-side rendering (SSR) for lightning-fast content delivery.",
      "Prioritized accessibility and responsiveness, ensuring an exceptional user experience for all visitors.",
      "Conducted rigorous code reviews and comprehensive QA procedures, surpassing industry standards for all features and updates before production deployment.",
    ],
    imageUrl: "/images/lightcast-marketing-site-screenshot.png",
  },
  {
    title: "PipeScan",
    company: "CNE Creative Enterprises",
    descriptions: [
      "PipeScan is a cutting-edge pipe inspection system developed for the oil field industry, catering to PRS Inspection’s needs.",
      "Powered by Django, React, and Django Channels, PipeScan establishes seamless communication with a custom board equipped with Hall effect sensors for monitoring pipe condition.",
      "Real-time live graphs provided by PipeScan, through web-sockets, enable dynamic viewing of pipe grade and conditions, empowering operators to make prompt decisions.",
      "Utilizing sophisticated algorithms, PipeScan meticulously analyzes data to accurately determine pipe wear and tear, grading pipes according to industry-defined standards.",
      "PipeScan streamlines pipe inspection processes, reduces downtime, and enhances operational efficiency in the challenging and critical oil field environment.",
    ],
    imageUrl: "/images/pipescan-screenshot.png",
  },
  {
    title: "WME Support Center",
    company: "CNE Creative Enterprises",
    descriptions: [
      "Developed a “Support Center” dashboard application with Django for Watermill Express.",
      "Enabled real-time monitoring, remote control, and maintenance of 1,500+ water purification centers across America.",
      "Implemented automated maintenance sche`duling and issue tracking for efficient operations.",
      "Utilized data analytics to derive insights from purification center performance data.",
      "Streamlined operation, reducing response times, and optimizing maintenance routines.",
    ],
    imageUrl: "/images/cant-show-nda.png",
  },
];
