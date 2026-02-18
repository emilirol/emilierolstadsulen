import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-xl border p-4">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>

      <Link to={`/projects/${project.slug}`}>
        <button>Les mer</button>
      </Link>
    </article>
  );
}
