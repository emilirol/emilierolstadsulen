import { projects } from "../../data/projects";
import ProjectCard from "../../pages/Projects/ProjectCard";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx"

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
