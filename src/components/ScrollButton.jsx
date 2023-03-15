import { TfiArrowUp } from "react-icons/tfi";
const ScrollButton = ({ handleScrollToTop, small }) => {
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="scroll to top button"
      className={
        "rounded-full text-gray-900 transition dark:text-white hover:scale-110 hover:text-blue-400 dark:hover:text-blue-500 focus:scale-110 focus:text-blue-400 dark:focus:text-blue-500 " +
        (!small ? "ml-4 hidden md:inline" : "sm:hidden")
      }
      title="Scroll Up?"
    >
      <TfiArrowUp size={36} />
    </button>
  );
};

export default ScrollButton;
