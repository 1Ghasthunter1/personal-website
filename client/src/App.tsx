import Header from "./components/Header";
import AppLayout from "./layouts/AppLayout";
import ProjectsView from "./views/ProjectsView";
import { Routes, Route } from "react-router-dom";
import ArticleView from "./views/ArticleView";

const App = () => {
  return (
    <AppLayout header={<Header />}>
      <Routes>
        <Route path="/" element={<ProjectsView />}></Route>
        <Route path="/projects/:id" element={<ArticleView />}></Route>
      </Routes>
    </AppLayout>
  );
};

export default App;
