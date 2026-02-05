import { Link } from "react-router-dom"
import "./ProjectCard.scss"

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/prosjekt/${project.slug}`} className="project-card__media">
        <img src={project.thumbnail} alt={project.title} />
      </Link>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__excerpt">{project.excerpt}</p>

        <ul className="project-card__tags">
          {project.tags?.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Kode
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
