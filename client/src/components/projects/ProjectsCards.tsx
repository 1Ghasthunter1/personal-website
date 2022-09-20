import { Project } from "../../types/types";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from "uuid";
const ProjectsCards = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-2 gap-12">
      {projects.map((project) => (
        <div key={uuidv4()}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
