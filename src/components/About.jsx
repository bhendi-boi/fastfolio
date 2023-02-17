import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiReactrouter,
  SiFramer,
  SiVisualstudiocode,
} from "react-icons/si";
import { motion } from "framer-motion";
// components
import Title from "./Title";
import viteSVG from "../assets/vite.svg";
import figmaSVG from "../assets/figma.svg";
import { aboutMe, name } from "../constants";
const About = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: "20%",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: "spring",
      damping: 60,
      stiffness: 900,
    },
  };
  return (
    <motion.section
      aria-labelledby="About me"
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, margin: "15px" }}
      transition={{
        type: "spring",
        damping: 60,
        stiffness: 800,
      }}
      className="px-4 mb-4 min-h-[calc(100vh-5rem)] leading-6 border-b-2  border-border dark:border-dark-border"
    >
      <Title name="About me" />
      <p>
        Hello 👋, I am{" "}
        <span className="px-2 text-lg font-semibold tracking-wide font-title text-faded-gray uppercase dark:text-faded-white">
          {name}
        </span>{" "}
        . {aboutMe}
      </p>
      <div className="mt-2">
        <p className="mb-2 font-semibold tracking-wide text-sub-title dark:text-dark-sub-title">
          Frameworks and tools I use :
        </p>
        <motion.ul
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{
            duration: 1,
            staggerChildren: 0.2,
          }}
          className="grid gap-4 pt-2 pb-8 text-lg text-gray-700 md:grid-cols-2 dark:text-neutral-200 md:text-xl"
        >
          {/* //? add the tools you use here  */}
          <motion.li className="inline-flex items-center gap-2 md:gap-3">
            <FaGitAlt size={36} className="text-red-600" /> Git
          </motion.li>
          <motion.li className="inline-flex items-center gap-2 md:gap-3">
            <FaGithub size={36} className="text-gray-700 dark:text-white" />{" "}
            GitHub
          </motion.li>
          <motion.li className="inline-flex items-center gap-2 md:gap-3">
            <SiVisualstudiocode size={36} color="rgb(0,120,215)" /> VS Code
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default About;
