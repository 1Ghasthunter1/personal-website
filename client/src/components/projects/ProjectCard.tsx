import Button from "../../elements/Button";
import { Project } from "../../types/types";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import ProjectCardBadge from "./ProjectCardBadge";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => {
  const Card = () => (
    <div className="relative flex flex-col overflow-hidden shadow-xl rounded-lg h-[25rem] bg-white hover:scale-103 duration-100 ">
      <div className="flex justify-between pt-6">
        <div className="border-gray-200 bg-white px-5 pb-3 w-full">
          <h3 className="text-3xl font-bold leading-6 text-gray-900">
            {project.name}
          </h3>
          <div className="text-md text-gray-500 pt-0.5">{project.date}</div>
          <div className="text-md pt-0.5">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
          <div className="flex flex-wrap mt-2 -ml-1 relative">
            {project.badges?.map((badgeName) => (
              <div key={uuidv4()} className="mx-1 mt-1 left-1">
                <ProjectCardBadge badge={badgeName} />
              </div>
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
        {project.notionId && (
          <Button style="secondary" iconName="arrow-right">
            Read More
          </Button>
        )}
      </div>
    </div>
  );
  return project.notionId ? (
    <Link to={`/projects/${project.id}`}>
      <Card />
    </Link>
  ) : (
    <Card />
  );
};

export default ProjectCard;
