import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { FaAngular, FaAws, FaCss3Alt, FaFigma, FaHtml5, FaInvision, FaJsSquare, FaReact, FaSketch, FaVuejs } from "react-icons/fa";
import { SiAdobelightroom, SiAdobepremierepro, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const tools = [
    "Linux, Windows MacOS",
    "Visual Studio Code",
    "Git (GitHub, GitLab, Bitbucket)",
    "Jira, Trello, Asana",
    "Slack, MS Teams, Zoom, Discord",
    "Jenkins",
    "NPM, PNPM, Vite",
    "Scrum, Kanban, Agile",
];

const designSkills = [
    {
        title: "Photoshop",
        icon: DiPhotoshop,
        href: "https://www.adobe.com/mx/products/photoshop.html",
        className: "p-0.5",
    },
    {
        title: "Illustrator",
        icon: DiIllustrator,
        href: "https://www.adobe.com/mx/products/illustrator.html",
        className: "p-0.5",
    },
    {
        title: "Figma",
        icon: FaFigma,
        href: "https://www.figma.com/",
        className: "p-1",
    },
    {
        title: "Invision",
        icon: FaInvision,
        href: "https://www.invisionapp.com/",
        className: "p-1",
    },
    {
        title: "Lightroom",
        icon: SiAdobelightroom,
        href: "https://lightroom.adobe.com/",
        className: "p-1",
    },
    {
        title: "Premierepro",
        icon: SiAdobepremierepro,
        href: "https://www.adobe.com/es/products/premiere.html",
        className: "p-1",
    },
    {
        title: "Sketch",
        icon: FaSketch,
        href: "https://www.sketch.com/",
        className: "p-1",
    },
];

const devSkills = [
    {
        title: "HTML",
        percentage: 90,
        classColor: "text-[#e44d25]",
        icon: FaHtml5
    },
    {
        title: "CSS",
        percentage: 90,
        classColor: "text-[#274de5]",
        icon: FaCss3Alt
    },
    {
        title: "Javascript",
        percentage: 90,
        classColor: "text-[#F0DB4F]",
        icon: FaJsSquare
    },
    {
        title: "Typescript",
        percentage: 50,
        classColor: "text-[#3279c7]",
        icon: SiTypescript
    },
    {
        title: "React",
        percentage: 80,
        classColor: "text-[#60dafa]",
        icon: FaReact
    },
    {
        title: "Next.js",
        percentage: 50,
        classColor: "text-white",
        icon: TbBrandNextjs
    },
    {
        title: "Angular",
        percentage: 60,
        classColor: "text-[#c30131]",
        icon: FaAngular
    },
    {
        title: "Vue",
        percentage: 50,
        classColor: "text-[#41B883]",
        icon: FaVuejs
    },
    {
        title: "Tailwindcss",
        percentage: 80,
        classColor: "text-[#38bdf9]",
        icon: SiTailwindcss
    },
    {
        title: "AWS",
        percentage: 40,
        classColor: "text-[#ff9903]",
        icon: FaAws
    },
];


export { designSkills, devSkills, tools };
