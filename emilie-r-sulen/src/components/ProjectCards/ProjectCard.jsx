import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="">
      <h3>{project.title}</h3>
      <img src={project.thumbnail} alt={project.title} />
      <ul>
        {project.technologies?.map((tech) =>
          <li key={tech}>{tech}</li>
        )}
      </ul>

      <p>{project.shortDescription}</p>

      <Link to={`/projects/${project.slug}`}>
        <button className="">Les mer</button>
      </Link>
    </div>
  );
}
