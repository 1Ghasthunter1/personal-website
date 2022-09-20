import Button from "../../elements/Button";
import { Project } from "../../types/types";
import ReactMarkdown from "react-markdown";
import Badge from "../../elements/Badge";
import ProjectCardBadge from "./ProjectCardBadge";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative flex flex-col overflow-hidden shadow-xl rounded-lg bg-white h-100 hover:scale-103 duration-100">
      <div className="flex justify-between pt-6">
        <div className="border-gray-200 bg-white px-5 pb-3 w-full">
          <h3 className="text-3xl font-bold leading-6 text-gray-900">
            {project.name}
          </h3>
          <div className="text-md text-gray-500 pt-2">{project.date}</div>
          <div className="text-md pt-2">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
          <div className="space-x-2 mt-2">
            {project.badges?.map((badgeName) => (
              <ProjectCardBadge badge={badgeName} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex overflow-hidden bg-black">
        <img
          className="min-w-full min-h-full object-cover opacity-80"
          src={project.imgUrl}
        />
      </div>
      <div className="absolute bottom-0 right-0 text-white m-4">
        <Button style="secondary" iconName="arrow-right">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
