"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Estate E-commerce Website",
    description: "A Real Estate E-commerce Website. where you will take your won dashboard. Buy option and also payment option...",
    image: "https://i.ibb.co/ZBTPbhF/project1.png",
    gitUrl: "https://github.com/naimur8606/EstateEcho-Realestate-client-site",
    previewUrl: "https://estate-echo.web.app/",
  },
  {
    id: 2,
    title: "Submit Assignment",
    description: "This is a education website. Mainly it is a Assignment submission website. There you will be find assignment...",
    image: "https://i.ibb.co/mqMn9W1/project2.png",
    gitUrl: "https://github.com/naimur8606/Assignment-Publications-client-site",
    previewUrl: "https://assignmentcommunication.web.app/",
  },
  {
    id: 3,
    title: "Shop E-commerce website",
    description: "This is a e-commerce website. It's specially for sell. There user will take their cart table option...",
    image: "https://i.ibb.co/bQXtSJ4/project3.png",
    gitUrl: "https://github.com/naimur8606/E-Commerce-web1-client",
    previewUrl: "https://sobdokander.web.app/",
  },
  {
    id: 4,
    title: "Wedding Management website",
    description: "This is a Wedding Management website. It's for wedding management site...",
    image: "https://i.ibb.co/XjVZNXz/project4.png",
    gitUrl: "https://github.com/naimur8606/Event-Management",
    previewUrl: "https://wedding-management-cb140.web.app/",
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/*  */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;