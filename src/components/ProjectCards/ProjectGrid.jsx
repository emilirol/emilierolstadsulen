import { projects } from "../../data/projects.js";
import ProjectCard from "../../pages/Projects/ProjectCard.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"

export default function ProjectGrid() {
  return (
    <>
      <Header />
      <h1 className="project-title">Prosjekter</h1>
      <div className="project__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>

    <Footer />
    </>
  );
}
