import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import { TiArrowBack } from "react-icons/ti";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [index, setIndex] = useState(0);

  if (!project) return <p>Prosjekt ikke funnet</p>;

  const items = project.media ?? [];
  const hasMedia = items.length > 0;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const current = items[index];

  return (
    <>
        <Link to="/projects">
            <TiArrowBack /> Tilbake til prosjekter
        </Link>

        <div className="project__page--card">  
            <h1>{project.title}</h1>
  
            {hasMedia && (
                <div className="carousel" aria-label="Gallery">
                <button className="carousel__btn" onClick={prev} aria-label="Forrige">
                    ‹
                </button>

                <div className="carousel__frame">
                    <figure className="carousel__figure">
                        {current.type === "image" ? (
                        <img
                            src={current.src}
                            alt={current.alt ?? `${project.title} ${index + 1}`}
                        />
                        ) : (
                        <video
                            src={current.src}
                            controls
                            aria-label={current.caption ?? `${project.title} video ${index + 1}`}
                        />
                        )}

                        {(current.caption || current.type === "video") && (
                        <figcaption className="carousel__caption">
                            {current.caption ?? "Video"}
                        </figcaption>
                        )}
                    </figure>
                </div>


                <button className="carousel__btn" onClick={next} aria-label="Neste">
                    ›
                </button>

                <div className="carousel__dots" aria-label="Bildevelger">
                    {items.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel__dot ${i === index ? "is-active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Gå til ${i + 1}`}
                    />
                    ))}
                </div>
                </div>
            )}

            <p>{project.fullDescription}</p>

            <h3>Teknologier</h3>
            <ul className="project__tech">
                {project.technologies.map((t) => (
                <li key={t}className="project__tech--li">{t}</li>
                ))}
            </ul>

            {project.collaborations?.length > 0 && (
                <div>
                <h3 >Samarbeid</h3>
                <ul className="project__collab">
                    {project.collaborations.map((person) => (
                    <li key={person.linkedin} className="project__colab--li">
                        <a href={person.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin />
                        {person.name}
                        </a>
                        {person.role && ` – ${person.role}`}
                    </li>
                    ))}
                </ul>
                </div>
            )}

            <div>
                <h3>GitHub kode og live side</h3>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"><TbWorldWww />Live</a>
            </div>
        </div>
    </>
  );
}
