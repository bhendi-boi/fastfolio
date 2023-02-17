import ScrollButton from "./ScrollButton";

const Contact = ({ scrollRef, handleScrollToTop }) => {
  return (
    <div className="flex justify-center gap-6 text-gray-900 dark:text-white">
      <ul
        role="list"
        ref={scrollRef}
        className="flex self-center justify-center col-span-2 gap-4 text-lg font-medium font-chips"
      >
        <li>
          <a
            aria-label="github-icon"
            target="_blank"
            href="https://github.com/bhendi-boi"
            title="Github Profile"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            Github
          </a>
        </li>
        <li>
          <a
            aria-label="linkedin-icon"
            target="_blank"
            href="https://www.linkedin.com/in/jyothikrishnaSajja"
            title="Linked-in Profile"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            aria-label="gmail-icon"
            target="_blank"
            href="mailto:bhendiisgreen@gmail.com"
            title="mail me"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            Gmail
          </a>
        </li>
        <li>
          <a
            aria-label="devcommunity-icon"
            target="_blank"
            href="https://dev.to/bhendi"
            title="Dev.to profile"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            Dev.to
          </a>
        </li>
      </ul>
      <ScrollButton small={true} handleScrollToTop={handleScrollToTop} />
    </div>
  );
};

export default Contact;
