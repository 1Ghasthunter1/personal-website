import ProjectCard from "../components/projects/ProjectCard";
import ProjectsCards from "../components/projects/ProjectsCards";
import TestMD from "../components/articles/NotionArticle";
import projects from "../data/projects";
const ProjectsView = () => {
  return (
    <div className="space-y-8 sticky">
      <div>
        <div className="text-3xl font-semibold">Projects</div>
        <div className="text-md">
          Below are all of my significant projects throughout the years. Click
          anywhere on the card to read more.
        </div>
      </div>
      <ProjectsCards projects={projects} />
    </div>
  );
};

export default ProjectsView;
