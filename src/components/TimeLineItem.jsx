import { motion } from "framer-motion";
const TimeLineItem = ({ title, start, end, details, category }) => {
  const END = end ? end : "Present";

  return (
    <motion.article
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        damping: 80,
        stiffness: 800,
      }}
      className="py-2 pl-4 border-l-2 border-gray-800 dark:border-gray-300"
    >
      <div className="flex flex-col relative after:content-[''] after:w-5 after:h-5 after:rounded-full after:bg-gray-800 dark:after:bg-gray-200 after:absolute after:-left-[26px] after:top-1">
        <h3 className="text-2xl font-medium text-sub-title dark:text-dark-sub-title">
          {title}
        </h3>
        <span className="text-sm opacity-50">
          {start} - {END}
        </span>
      </div>
      <p className="leading-8">{details}</p>
    </motion.article>
  );
};

export default TimeLineItem;
