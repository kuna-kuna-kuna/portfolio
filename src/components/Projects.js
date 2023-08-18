import { Data } from "../Data";
import "../styles/Projects.scss";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectsTitleContainer">
        <div className="ProjectsTitle">{"Recent"}</div>
        <div className="ProjectsTitle active">{"Projects"}</div>
      </div>
      {Data.map((item) => (
        <ProjectCard data={item} />
      ))}
    </div>
  );
}
