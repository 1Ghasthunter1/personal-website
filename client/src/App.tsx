import Header from "./components/Header";
import ProjectCard from "./components/projects/ProjectCard";
import ProjectsCards from "./components/projects/ProjectsCards";
import AppLayout from "./layouts/AppLayout";
import ProjectsView from "./views/ProjectsView";

const App = () => {
  return (
    <AppLayout header={<Header />}>
      <div className="m-8">
        <ProjectsView />
      </div>
    </AppLayout>
  );
};

export default App;
