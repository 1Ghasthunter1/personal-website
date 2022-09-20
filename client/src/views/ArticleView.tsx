import NotionArticle from "../components/articles/NotionArticle";
import projects from "../data/projects";
import { useParams } from "react-router";
import Button from "../elements/Button";

const ArticleView = () => {
  const { id } = useParams();
  if (!id) return null;

  console.log(id);

  const project = projects.find((project) => project.id === id);
  if (!project) return null;
  return (
    <div className="block">
      <div className="flex">
        <Button iconName="arrow-left">Back</Button>
        <h2 className="text-4xl font-bold mb-4">{project.name}</h2>
      </div>
      <NotionArticle notionId={project.notionId} />
    </div>
  );
};

export default ArticleView;
