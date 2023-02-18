import { motion } from "framer-motion";
import { useState } from "react";
import Title from "./Title";
import data from "../assets/Projects";
import MobileProjectCard from "./MobileProjectCard";
import ProjectCard from "./ProjectCard";

const Projects = ({ scrollRef }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section
      aria-labelledby="Projects"
      ref={scrollRef}
      className="relative px-4 border-b-2 border-border dark:border-dark-border"
    >
      <Title name="Projects" />
      <motion.div className="grid gap-12 my-4 sm:place-items-center last:pb-8 lg:hidden">
        {data.map((project) => {
          return (
            <MobileProjectCard
              key={project.name}
              name={project.name}
              stack={project.stack}
              url={project.url}
              githubURL={project.githubURL}
              details={project.details}
              imageURL={project.imageURL}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </motion.div>
      <motion.div className="hidden gap-12 my-4 lg:grid last:pb-8">
        {data.map((project, index) => {
          return (
            <ProjectCard
              layoutId={index}
              key={project.name}
              name={project.name}
              stack={project.stack}
              url={project.url}
              githubUrl={project.githubURL}
              details={project.details}
              imageURL={project.imageURL}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
