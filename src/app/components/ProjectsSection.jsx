"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Youtube Clone Application",
    description: "Youtube copycat application made with React.js, Material UI, and youtube v3 rapidAPI.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ronategarcia/YT_clone",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Artificial Intelligence Programs",
    description: "Projects and laboratories from Artificial Intelligence course at California State University, Fullerton.",
    image: "/images/projects/2.png",
    tag: ["All", "Terminal"],
    gitUrl: "https://github.com/ronategarcia/CPSC481",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Undergraduate Seminar Project",
    description: "Social media web application made purely with HTML, CSS, and JavaScript.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ronategarcia/CPSC490",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Python Programs",
    description: "Laboratories from Python course at California State University, Fullerton.",
    image: "/images/projects/4.png",
    tag: ["All", "Terminal"],
    gitUrl: "https://github.com/ronategarcia/CPSC223P",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Terminal"
          isSelected={tag === "Terminal"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
