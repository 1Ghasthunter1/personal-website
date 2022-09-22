import Header from "./components/Header";
import AppLayout from "./layouts/AppLayout";
import ProjectsView from "./views/ProjectsView";
import { Routes, Route, Navigate } from "react-router-dom";
import ArticleView from "./views/ArticleView";
import ScrollToTop from "./utils/scrollToTop";
import ResumeView from "./views/ResumeView";

const App = () => {
  return (
    <AppLayout header={<Header />}>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/projects" element={<ProjectsView />}></Route>
          <Route path="/resume" element={<ResumeView />}></Route>
          <Route path="/projects/:id" element={<ArticleView />}></Route>
          <Route path="*" element={<Navigate to="/projects" />} />
        </Routes>
      </>
    </AppLayout>
  );
};

export default App;
