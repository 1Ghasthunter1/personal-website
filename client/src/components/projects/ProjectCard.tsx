import Button from "../../elements/Button";
import { Project } from "../../types/types";
import ReactMarkdown from "react-markdown";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative flex flex-col overflow-hidden shadow-xl rounded-lg bg-white h-100 hover:scale-103 duration-100">
      <div className="flex justify-between pt-5">
        <div className="border-gray-200 bg-white px-4 pb-3 w-full">
          <h3 className="text-2xl font-bold leading-6 text-gray-900">
            {project.name}
          </h3>
          <div className="text-md text-gray-500">{project.date}</div>
          <div className="text-md pt-2">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="h-full flex overflow-hidden">
        <img
          className="min-w-full min-h-full object-cover"
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
