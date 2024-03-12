import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Canvasity",
    desc: "Innovative SAAS with AI for image enhancement and manipulation.",
    img: "/static/projects/canvasify.png",
    link: "https://canvasify-nextjs-ai-saas.vercel.app/",
    github: "https://github.com/brishikiran/canvasify-nextjs-ai-saas",
    tags: ["NextJS", "MongoDB", "Webhooks", "Clerk Auth"],
  },
  {
    id: 1,
    title: "GPT Bio Geneartor",
    desc: "Developed a cutting-edge Bio Generator application for seamless generation of personalized biographies.",
    img: "/static/projects/biogen.png",
    link: "https://bio-generator-gpt-rust.vercel.app/",
    github: "https://github.com/brishikiran/bio-generator-gpt",
    tags: ["NextJS", "MistralAI", "OpenAI"],
  },
  {
    id: 2,
    title: "Smart Expense Tracker",
    desc: "A React application with GraphQL integration, MongoDB, and PassportJS for secure and efficient expense tracking.",
    img: "/static/projects/expensetracker.png",
    link: "https://expense-tracker-gql-kbxn.onrender.com/",
    github: "https://github.com/brishikiran/expense-tracker-GQL",
    tags: ["React", "GarphQL", "MongoDB", "PassportJS"],
  },
  {
    id: 3,
    title: "Task Manager",
    desc: "A Next.js application utilizing Prisma, MongoDB, and Tailwind CSS to manage tasks efficiently with a modern and intuitive interface.",
    img: "/static/projects/taskmanager.png",
    link: "https://taskmanager-nextjs-kappa.vercel.app/",
    github: "https://github.com/brishikiran/taskmanager-nextjs",
    tags: ["NextJS", "Prisma", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Image Captioning - Deep Learning",
    desc: "Utilizing convolutional neural networks (CNN), Numpy, and Matplotlib to generate captions for images.",
    img: "/static/projects/imagecaption.png",
    github: "https://github.com/brishikiran/Image-Captioning-using-Deep-Learning",
    tags: ["Python", "CNN", "Numpy", "Matplotlib"],
  },
  {
    id: 5,
    title: "3D Portfolio Website",
    desc: "A visually stunning 3D portfolio website built with React, Tailwind CSS, and Three.js for immersive user experience.",
    img: "/static/projects/3dportfolio.png",
    link: "https://rishikirantech.com/",
    github: "https://github.com/brishikiran/3D_Portfolio",
    tags: ["React", "Tailwind CSS", "Three.js"],
  },
  {
    id: 6,
    title: "React Sneaker Store",
    desc: "A React-based sneaker store web application with Tailwind CSS for UI/UX design.",
    img: "/static/projects/sneakerstore.png",
    link: "https://brishikiran.github.io/react-sneaker-store/",
    github: "https://github.com/brishikiran/react-sneaker-store",
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },

  {
    id: 7,
    title: "Blog Generation - LLAMA2",
    desc: "LLAMA2-powered Python application for generating blogs using Streamlit.",
    img: "/static/projects/bloggen.png",
    github: "https://github.com/brishikiran/Blog-Generation-LLAMA-2",
    tags: ["Python", "Llama2", "Streamlit"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
