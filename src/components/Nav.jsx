import { CgMenuRight } from "react-icons/cg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import useTheme from "../useTheme";
import MobileNav from "./MobileNav";
import { name } from "../constants";

const Nav = ({
  handleScrollToSection,
  handleScrollToTop,
  visible,
  toggleVisible,
}) => {
  const links = ["Projects", "Timeline", "Contact"];
  const handleClick = (e) => {
    const element = e.target;
    const section = element.innerText.toLowerCase();
    handleScrollToSection(section);
    if (element.getAttribute("data-media") === "sm") {
      toggleVisible();
    }
  };

  //
  const [theme, toggleTheme] = useTheme();
  //
  return (
    <nav
      className={
        "sticky top-0 left-0 z-50 shadow-xl backdrop-blur-sm " +
        (visible
          ? "bg-neutral-50 dark:bg-dark-nav-background "
          : "bg-neutral-50/70 dark:bg-dark-nav-background")
      }
    >
      {/* wrapper so that nav also has 3/4 width */}
      <div
        className={
          "flex items-center justify-around h-16 md:w-3/4 md:mx-auto " +
          (visible ? "" : "")
        }
      >
        <div className="flex items-center justify-between w-full h-full mx-4 md:m-0 dark:text-white">
          <h1
            onClick={handleScrollToTop}
            className="text-4xl font-semibold tracking-wider text-brand-color dark:font-medium font-name dark:text-neutral-50 hover:cursor-pointer"
          >
            {name}
          </h1>
        </div>
        <button aria-label="Toggle theme" className="mx-2">
          {theme === "light" ? (
            <MdOutlineDarkMode
              title="Dark mode"
              size={30}
              className="text-gray-900 opacity-75 cursor-pointer hover:opacity-100 transition-opacity duration-150"
              onClick={toggleTheme}
            />
          ) : (
            <MdOutlineLightMode
              title="Light mode"
              size={30}
              className="opacity-75 cursor-pointer text-amber-400 hover:opacity-100 transition-opacity duration-150"
              onClick={toggleTheme}
            />
          )}
        </button>
        <button
          title="Open menu"
          onClick={toggleVisible}
          className="self-center m-4 ml-auto cursor-pointer md:hidden"
        >
          {visible ? (
            <AiOutlineClose size={30} className="dark:text-white" />
          ) : (
            <CgMenuRight size={30} className="dark:text-white" />
          )}
        </button>
        <ul className="items-center hidden mr-6 tracking-wider list-none font-chips md:flex">
          {links.map((link) => {
            return (
              <li
                key={link}
                onClick={(e) => handleClick(e)}
                className="py-1 mx-2 text-xl font-medium transition-opacity duration-500 cursor-pointer opacity-60 dark:text-dark-nav hover:opacity-100 focus:opacity-100"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile toggle */}
      {visible ? (
        <MobileNav
          links={links}
          toggleVisible={toggleVisible}
          handleClick={handleClick}
        />
      ) : null}
    </nav>
  );
};

export default Nav;
