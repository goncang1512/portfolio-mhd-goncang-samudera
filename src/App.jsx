import "./App.css";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import ContactPage from "./components/pages/ContactPage";
import AboutSection from "./components/pages/AboutSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
