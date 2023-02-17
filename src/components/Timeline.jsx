import { motion } from "framer-motion";
import data from "../assets/TimeLine";
import Title from "./Title";
import TimeLineItem from "./TimeLineItem";

const Timeline = ({ scrollRef }) => {
  return (
    <motion.section
      aria-labelledby="Timeline"
      ref={scrollRef}
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "15px" }}
      transition={{
        type: "spring",
        damping: 80,
        stiffness: 600,
      }}
      className="px-2 border-b-2 min-h-[calc(100vh-5rem)] border-border dark:border-dark-border"
    >
      <Title name="Timeline" />
      <motion.div
        transition={{ staggerChildren: 1 }}
        className="ml-4 md:ml-8 last:pb-8"
      >
        {data.map((item) => (
          <TimeLineItem
            key={item.title}
            title={item.title}
            details={item.details}
            start={item.start}
            end={item.end}
            links={item.links}
            category={item.category}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Timeline;
