import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({
  name,
  stack,
  details,
  url,
  imageURL,
  layoutId,
  githubUrl,
}) => {
  return (
    <motion.article
      layoutId={layoutId}
      initial={{ y: "10%", z: "50px", scale: 0.85 }}
      whileInView={{ y: 0, z: 0, scale: 1 }}
      animate={{ height: "auto" }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        damping: 60,
        stiffness: 900,
      }}
      className="grid mx-2 overflow-hidden rounded-lg shadow-2xl project-card dark:shadow-sm bg-neutral-50 dark:bg-dark-card-background"
    >
      <picture className="flex flex-col gap-2 bg-yellow-300">
        <img
          src={imageURL}
          alt={`${name} photo`}
          className="object-cover w-full h-full aspect-video"
        />
      </picture>
      <div className="flex flex-col">
        <h3 className="mx-6 my-3 text-3xl font-medium text-center text-sub-title font-title dark:text-dark-sub-title">
          {name}
        </h3>
        {/* // TODO add github and view project  */}
        <motion.p className={"mx-6 min-h-[78px]"}>{details}</motion.p>
        <div className="flex gap-4 mx-6 mt-4 mb-6 text-sm lg:text-base">
          <ul className="flex items-center justify-center flex-1 gap-4 text-sm text-teritiary-link dark:text-dark-teritiary-link font-title">
            {stack.map((item) => {
              return (
                <li key={item} className="">
                  # {item}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-end gap-4">
            <a
              href={url}
              target="_blank"
              rel="norefer"
              className="inline-flex items-center gap-2 px-2 py-1 font-semibold tracking-wider text-gray-800 transition-colors duration-500 bg-transparent border border-gray-800 rounded-md outline-none cursor-pointer lg:px-4 hover:font-semibold hover:bg-transparent opacity-60 border-opacity-60 hover:opacity-100 hover:border-opacity-100 dark:text-neutral-100 dark:border-neutral-100"
            >
              Visit <BiLinkExternal />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="norefer"
              className="inline-flex items-center gap-2 px-2 py-1 font-medium tracking-wider transition-colors duration-500 bg-gray-800 border border-gray-800 rounded-md outline-none cursor-pointer lg:px-4 hover:font-semibold hover:bg-transparent text-neutral-100 hover:text-gray-800 hover:border-gray-800 dark:bg-neutral-100 dark:hover:bg-transparent dark:border-neutral-100 dark:text-gray-800 dark:font-semibold dark:hover:text-neutral-100"
            >
              View <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
