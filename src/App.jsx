import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import About from "./components/About";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

const App = () => {
  // vars
  const timeline = useRef(null);
  const projects = useRef(null);
  const co = useRef(null);
  const contact = useRef(null);
  const refs = {
    timeline: timeline,
    projects: projects,
    contact: contact,
  };

  // functions
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (name) => {
    if (name === "contact") {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: document.body.offsetHeight,
      });
      return;
    }
    window.scrollTo({
      top: refs[name].current.offsetTop - 10,
      left: 0,
      behavior: "smooth",
    });
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    const body = document.getElementById("body");
    if (visible) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [visible]);

  return (
    <>
      <Nav
        handleScrollToSection={handleScrollToSection}
        handleScrollToTop={handleScrollToTop}
        visible={visible}
        toggleVisible={toggleVisible}
      />
      {/* px-2 exists so that border will not go till the end of screen */}
      <main
        ref={co}
        className={
          "relative px-2 md:w-3/4 md:mx-auto text-body dark:text-dark-body" +
          (visible
            ? "max-w-[calc(100vw-.5rem)] sm:max-w-[calc(100vw-1rem)]"
            : "")
        }
      >
        {!visible && (
          <motion.div
            className="fixed inset-0 z-50 h-1 bg-teal-600 dark:bg-neutral-50/80 top-16"
            style={{ scaleX: scaleX, transformOrigin: "left" }}
          />
        )}

        <Intro />
        <About />
        <Projects scrollRef={projects} />
        <Timeline scrollRef={timeline} />
      </main>
      <Footer handleScrollToTop={handleScrollToTop} scrollRef={contact} />
    </>
  );
};

export default App;
