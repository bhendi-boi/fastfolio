import React from "react";

const TeritiaryLink = ({ children, href }) => {
  return (
    <a
      href={href}
      rel="norefer"
      target="_blank"
      className="mx-1 text-teritiary-link dark:text-dark-teritiary-link hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2"
    >
      {children}
    </a>
  );
};

export default TeritiaryLink;
