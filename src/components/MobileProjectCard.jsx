import { motion } from "framer-motion";
import { useState } from "react";
import TeritiaryLink from "./TeritiaryLink";
const MobileProjectCard = ({
  name,
  stack,
  details,
  url,
  imageURL,
  layoutId,
}) => {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded((prev) => !prev);
  }
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
      className="flex flex-col mx-2 overflow-hidden text-gray-800 rounded-lg shadow-2xl dark:shadow-sm dark:text-gray-200 bg-neutral-50 dark:bg-dark-card-background max-w-[24rem]"
    >
      <picture className="flex flex-col gap-2 bg-yellow-300">
        <img
          src={imageURL}
          alt={`${name} photo`}
          className="object-cover w-full h-60 aspect-video"
        />
      </picture>
      <div className="flex flex-col">
        <h3 className="my-4 text-3xl font-medium text-center text-gray-900 font-title dark:text-neutral-50">
          {name}
        </h3>
        {/* // TODO add github and view project  */}
        <span className="mx-6 text-xs md:text-sm">
          <TeritiaryLink href={url}>{url}</TeritiaryLink>
        </span>
        <motion.p
          onClick={handleClick}
          className={
            "mx-6 min-h-[78px] cursor-pointer line-clamp-3 " +
            (expanded ? "line-clamp-none" : "")
          }
        >
          {details}
        </motion.p>
        <ul className="flex gap-4 justify-center m-4 mb-6 px-4 min-h-[2rem]">
          {stack.map((item) => {
            return (
              <li
                key={item}
                className="px-3 py-1 text-base font-medium bg-gray-800 rounded-sm shadow-md bg:opacity-90 text-neutral-50 dark:text-black md:text:xl dark:bg-neutral-50 font-chips ring-2 ring-gray-800 dark:ring-neutral-50 border-opacity-70"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.article>
  );
};

export default MobileProjectCard;
