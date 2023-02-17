import { motion } from "framer-motion";
import DownloadbleButton from "./DownloadbleButton";
const imageSrc =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Intro = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        ease: "easeIn",
        duration: 1,
      }}
      className="flex flex-col items-center min-h-[calc(89vh)] md:min-h-[calc(100vh-6rem)] border-b-2 border-border justify-evenly dark:border-dark-border"
    >
      <div className="flex flex-col items-center gap-4">
        <picture className="overflow-hidden bg-yellow-300 rounded-full h-52 w-52 md:h-72 md:w-72">
          <img
            src={imageSrc}
            alt="Jyothikrishna image"
            className="object-cover aspect-square"
          />
        </picture>
        <span className="text-3xl font-medium tracking-wide text-center font-name dark:text-white text-sub-title">
          React Dev
        </span>
      </div>
      <DownloadbleButton text="FULL CV AS PDF" assetSrc="public/cv.pdf" />
    </motion.section>
  );
};

export default Intro;
