import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

import ProjectGrid from "./components/ProjectCards/ProjectGrid.jsx";
import ProjectPage from "./pages/Projects/ProjectPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/projects" element={<ProjectGrid />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
