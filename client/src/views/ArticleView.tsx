import NotionArticle from "../components/articles/NotionArticle";
import projects from "../data/projects";
import { useParams } from "react-router";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const ArticleView = () => {
  const { id } = useParams();
  if (!id) return null;

  console.log(id);

  const project = projects.find((project) => project.id === id);
  if (!project) return null;
  return (
    <div className="flex flex-col items-center">
      <div className="relative border-b border-gray-200 bg-white rounded-2xl p-8 w-3/4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p className="text-md text-gray-500 mb-6">{project.date}</p>
        </div>
        <NotionArticle notionId={project.notionId} />
        <div className="absolute top-8 left-8">
          <Link to="/">
            <Button style="secondary" iconName="arrow-left">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
