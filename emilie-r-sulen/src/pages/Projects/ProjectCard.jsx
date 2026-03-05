import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className="project__card">
        <img src={project.thumbnail} alt={project.title} />
        <h3>{project.title}</h3>
        <ul className="projectcard__list">
          {project.technologies?.map((tech) =>
            <li key={tech}>{tech}</li>
          )}
        </ul>

        <p>{project.shortDescription}</p>
        
        <button><Link to={`/projects/${project.slug}`}>Les mer</Link></button>
        
      </div>

    </>
  );
}

