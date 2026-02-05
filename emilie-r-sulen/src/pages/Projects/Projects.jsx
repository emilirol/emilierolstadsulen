import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx"
import { projects } from "../../data/projects.js"
import "./Projects.scss"

export default function Projects() {
  return (
    <main className="projects">
      <h1>Prosjekter</h1>

      <section className="projects__grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </main>
  )
}
