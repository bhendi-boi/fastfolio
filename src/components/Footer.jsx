import { name } from "../constants";
import Contact from "./Contact";
import ScrollButton from "./ScrollButton";
import TeritiaryLink from "./TeritiaryLink";
const Footer = ({ handleScrollToTop, scrollRef }) => {
  return (
    <footer className="flex flex-col justify-center w-3/4 gap-4 py-4 mx-auto md:flex-row">
      <Contact scrollRef={scrollRef} handleScrollToTop={handleScrollToTop} />
      <p className="inline-flex items-center justify-center text-center text-faded-gray dark:text-faded-white">
        &copy; {new Date().getFullYear()}{" "}
        <span className="px-1">
          <TeritiaryLink href="https://githb.com/bhendi-boi">
            Jyothikrishna
          </TeritiaryLink>
        </span>{" "}
        <span className="hidden md:inline">All rights reserved.</span>
        <ScrollButton small={false} handleScrollToTop={handleScrollToTop} />
      </p>
    </footer>
  );
};

export default Footer;
