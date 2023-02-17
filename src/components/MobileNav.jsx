import { AnimatePresence, motion } from "framer-motion";
const MobileNav = ({ links, toggleVisible, handleClick }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        onClick={toggleVisible}
        className="absolute right-0 w-full min-h-screen overflow-hidden bg-gray-700/50"
      >
        <motion.ul
          initial={{
            x: "100%",
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.12,
          }}
          role="list"
          className="absolute right-0 flex flex-col w-1/2 min-h-full font-title bg-neutral-50 dark:bg-dark-nav-background last:pb-2"
        >
          {links.map((link) => {
            return (
              <li
                key={link}
                data-media="sm"
                onClick={(e) => {
                  handleClick(e);
                  toggleVisible();
                }}
                className="px-6 py-1 text-2xl font-medium transition-opacity duration-500 cursor-pointer opacity-60 dark:text-dark-nav hover:opacity-100 focus:opacity-100"
              >
                {link}
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
