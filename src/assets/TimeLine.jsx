import TeritiaryLink from "../components/TeritiaryLink";
import TimeLineDetails from "../components/TimeLineDetails";
export default [
  {
    title: "Bachelors in Electronics and Communication",
    start: 2021,
    end: 2025,
    category: "Education",
    details: <BTechDetails />,
  },
  {
    title: "React Developer",
    start: 2022,
    end: null,
    category: "Skill",
    details: <ReactDeveloperDetails />,
  },
  {
    title: "Joint Core - PRIT",
    start: "Aug 2022",
    end: null,
    category: "Voluntering",
    details: <PritJCDetails />,
  },
  {
    title: "Web Developer",
    start: "Sep 2022",
    end: null,
    category: "Volunteering",
    details: <AUVDetails />,
  },
];

function ReactDeveloperDetails() {
  return (
    <TimeLineDetails>
      I am a React Dev since 2022. You can check my work by visiting Projects
      section or my{" "}
      <TeritiaryLink href="https://bhendiboi.github.io">Github</TeritiaryLink>
      profile.
    </TimeLineDetails>
  );
}
function BTechDetails() {
  return (
    <TimeLineDetails>
      I am my pursuing my Bachelors from{" "}
      <TeritiaryLink href="https://iiitdm.ac.in/">
        IIITDM, Kancheepuram.
      </TeritiaryLink>{" "}
      I am currently in my sophomore year.
    </TimeLineDetails>
  );
}
function PritJCDetails() {
  return (
    <TimeLineDetails>
      I voluntereed as a Joint Core for PRIT division (Projects and Industrial
      Talks) of{" "}
      <TeritiaryLink href="https://csclub.netlify.app/">
        CS Club IIITDM, Kancheepuram.
      </TeritiaryLink>{" "}
    </TimeLineDetails>
  );
}
function AUVDetails() {
  return (
    <p className="leading-5 opacity-90">
      I volunteered to work as a web developer at{" "}
      <TeritiaryLink href="https://auviiitdm.github.io/">
        AUV, IIITDM
      </TeritiaryLink>{" "}
      where in I made the codebase more modular by extracting repetitive blocks
      of code into React Components. In addition to that I also made some bug
      fixes.
    </p>
  );
}
