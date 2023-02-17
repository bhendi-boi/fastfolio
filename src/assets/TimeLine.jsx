import TeritiaryLink from "../components/TeritiaryLink";
import TimeLineDetails from "../components/TimeLineDetails";
import { githubProfile } from "../constants";

export default [
  {
    title: "Your degree",
    start: 2021,
    end: 2025,
    category: "Education",
    details: <EducationDetails />,
  },
  {
    title: "React Developer",
    start: 2022,
    end: null,
    category: "Skill",
    details: <ReactDeveloperDetails />,
  },
];

function EducationDetails() {
  return <TimeLineDetails>Description of your degree.</TimeLineDetails>;
}

function ReactDeveloperDetails() {
  return (
    <TimeLineDetails>
      I am a React Dev since 2022. You can check my work by visiting Projects
      section or my <TeritiaryLink href={githubProfile}>Github</TeritiaryLink>
      profile.
    </TimeLineDetails>
  );
}
