import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    raben,
    b24,
    psnc,
    thissite
  } from "../assets";
  
  import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedinIn, 
    FaSoundcloud, 
    FaGithub 
  } from 'react-icons/fa'

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IT Specialist",
      company_name: "Raben Management Services",
      icon: raben,
      iconBg: "#fff",
      date: "May 2023 - Jan 2024",
      points: [
        "Working in IT support team on a helpdesk, using SQLDeveloper, Linux and some proprietary software from e2open.",
      ],
    },
    {
      title: "Customer Service Specialist",
      company_name: "Bilety24",
      icon: b24,
      iconBg: "#fff",
      date: "Apr 2023 - May 2023",
      points: [
        "Working on a helpdesk with proprietary software written in C#, mainly talking to people on the phone and servicing Windows-based kiosks with the software installed on them",
      ],
    },
    {
      title: "R&D Engingeer / Computer System Analyst",
      company_name: "Poznan Supercomputing and Networking Center",
      icon: psnc,
      iconBg: "#fff",
      date: "Oct 2018 - May 2022",
      points: [
        "Writing software in Java, Python and JavaScript, designing and building hardware, flying drones, fast prototyping using 3D printing, laser-cutting and more",
      ],
    },
  ];
  
  const projects = [
    {
      name: "This site",
      description:
        "Web app that allows users to see what I've worked on and contact me",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: thissite,
      source_code_link: "https://github.com/mchodyla/3js_portfolio",
    },
    // {
    //   name: "Some Next.js project",
    //   description:
    //     "Coming soon",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, projects };