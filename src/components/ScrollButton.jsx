import { TfiArrowUp } from "react-icons/tfi";
const ScrollButton = ({ handleScrollToTop, small }) => {
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="scroll to top button"
      className={
        "rounded-full " + (!small ? "pl-4 hidden md:inline" : "sm:hidden")
      }
      title="Scroll Up?"
    >
      <TfiArrowUp
        size={36}
        className="text-gray-900 transition dark:text-white hover:scale-110 hover:text-blue-400 dark:hover:text-blue-500"
      />
    </button>
  );
};

export default ScrollButton;
