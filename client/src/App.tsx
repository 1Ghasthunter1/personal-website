import Header from "./components/Header";
import TestMD from "./components/TestMD";
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
