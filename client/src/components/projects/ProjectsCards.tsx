import { Project } from "../../types/types";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from "uuid";

const ProjectsCards = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-12">
      {projects.map((project) => (
        <div key={uuidv4()} className="min-w-full">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
