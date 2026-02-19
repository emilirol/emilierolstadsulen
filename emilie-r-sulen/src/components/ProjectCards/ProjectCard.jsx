import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <ul>
        {project.technologies?.map((tech) =>
          <li key={tech}>{tech}</li>
        )}
      </ul>

      <p>{project.shortDescription}</p>

      <Link to={`/projects/${project.slug}`}>
        <button>Les mer</button>
      </Link>
    </article>
  );
}
