import NotionArticle from "../components/articles/NotionArticle";
import projects from "../data/projects";
import { useParams } from "react-router";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const ArticleView = () => {
  const { id } = useParams();
  if (!id) return null;

  const project = projects.find((project) => project.id === id);

  if (!project) return null;

  return (
    <div className="flex flex-col items-center ">
      <div className="relative border-b border-gray-200 rounded-2xl w-screen max-w-3xl px-8">
        <div className=" sticky mb-4">
          <Link to="/">
            <Button style="secondary" iconName="arrow-left">
              Back
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p className="text-md text-gray-500">{project.date}</p>
        </div>
        <NotionArticle notionId={project.notionId} />
      </div>
    </div>
  );
};

export default ArticleView;
