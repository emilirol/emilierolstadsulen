import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import { TiArrowBack } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Prosjekt ikke funnet</p>;

  return (
    <>
        <Link to="/projects"><TiArrowBack /> Tilbake til prosjekter</Link>

        <h1>{project.title}</h1>
        {project.media?.length > 0 && (
            <div className="">
                {project.media.map((item, i) => {
                    if (item.type === "image") {
                        return (
                        <img
                            key={i}
                            src={item.src}
                            alt={`${project.title} media ${i}`}
                            className=""
                        />
                        );
                    }

                    if (item.type === "video") {
                        return (
                        <video
                            key={i}
                            src={item.src}
                            controls
                            className=""
                        />
                        );
                    }

                return null;
                })}
            </div>
    )}

        <p>{project.fullDescription}</p>

        <h3>Teknologier</h3>
            <ul>
                {project.technologies.map((t) => (
                <li key={t}>{t}</li>
                ))}
            </ul>

    {project.collaborations?.length > 0 && (
        <div>
            <h3>Samarbeid</h3>
                <ul>
                {project.collaborations.map((person) => (
                    <li key={person.linkedin}>
                        <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />{person.name}
                        </a>
                    {person.role && ` – ${person.role}`}
                    </li>
                ))}
                </ul>
        </div>
    )}


        <div style={{ display: "flex", gap: 12 }}>
            <a href={project.githubUrl} target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer"><TbWorldWww />Live</a>
        </div>
    </>
  );
}
