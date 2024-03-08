type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },


  {
    title: "ASP.NET",
    icon: "https://www.svgrepo.com/show/508894/aspnet.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "SQL Server",
    icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
  },
  {
    title: "AWS",
    icon: "https://cdn.worldvectorlogo.com/logos/amazon-web-services.svg",
  },
  {
    title: "MongoDB",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    title: "Azure",
    icon: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
  },
  {
    title: "OpenAI ",
    icon: "data:image/png;base64,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",
  },

];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
