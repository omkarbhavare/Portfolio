import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "IMDB+ Clone",
    description:
      "Built an IMDb rating clone featuring real-time data, pagination, search, bookmarking, manual ratings, multilingual support, and local storage!",
    tags: ["React", "Javascript", "Tailwind", "NodeJS"],
    imageUrl: "/imdb.jpg",
    link: "https://cineverse-1x8a2lqhz-omkarbhavares-projects.vercel.app/",
  },
  {
    title: "Expense Tracker",
    description:
      "Developed an Expense Tracker app to manage accounts effectively, enabling users to log expenses, categorize transactions & latest trends in economy.",
    tags: ["React", "Restful APIs", "NodeJs"],
    imageUrl: "/money.png",
    link: "https://money-ball.vercel.app/",
  },
  {
    title: "Swiggy Clone",
    description:
      "I'm building a Swiggy clone, a feature-rich food delivery application that includes functionalities like user authentication, restaurant listing, order & payment.",
    tags: ["React", "Redux", "Swiggy API", "Tailwind", "NodeJS" , "JEST"],
    imageUrl: "/swiggy.png",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy--OfGwMTiud7ENwpDxXgFwFo9IHtct5Kw&s",
  },
  {
    title: "Hirit Job Portal + Resume Builder",
    description:    "Built an engaging Hirit Job Portal for users to search jobs and create resumes, while recruiters can easily post listings!",
    tags: ["React", "Redux", "Javascript", "Tailwind", "Supabase"],
    imageUrl: "/job.jpeg",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy--OfGwMTiud7ENwpDxXgFwFo9IHtct5Kw&s",
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
  "JAVA",
  "AWS",
  "Docker"
];
