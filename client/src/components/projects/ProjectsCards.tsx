import { Project } from "../../types/types";
import ProjectCard from "./ProjectCard";

const ProjectsCards = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-2 gap-12 ">
      {projects.map((project) => (
        <div className="">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
