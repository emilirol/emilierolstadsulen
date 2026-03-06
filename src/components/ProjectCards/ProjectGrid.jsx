import { projects } from "../../data/projects.js";
import ProjectCard from "../../pages/Projects/ProjectCard.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"

export default function ProjectGrid() {
  return (
    <>
      <Header />
      <div className="project__grid">
          <h1 className="project-title">Prosjekter</h1>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>

    <Footer />
    </>
  );
}
