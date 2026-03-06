import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import { TiArrowBack } from "react-icons/ti";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  if (!project) return <p>Prosjekt ikke funnet</p>;

  const items = project.media ?? [];
  const hasMedia = items.length > 0;
  const current = items[index];

  const startAutoplay = () => {
    if (!items.length) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); 
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!hasMedia || items.length < 2) return;

    // Ikke autoplay hvis aktivt element er video
    if (current?.type === "video") {
      stopAutoplay();
      return;
    }

    startAutoplay();

    return () => stopAutoplay();
  }, [index, hasMedia, items.length, current?.type]);

  useEffect(() => {
    setIndex(0);
  }, [slug]);

  const prev = () => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % items.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <>
      <Link className="project__back-to" to="/projects">
        <TiArrowBack /> Tilbake til prosjekter
      </Link>

      <div className="project__page--card">
        <h1>{project.title}</h1>

        {hasMedia && (
          <div
            className="carousel"
            aria-label="Gallery"
            onMouseEnter={stopAutoplay}
            onMouseLeave={() => {
              if (current?.type !== "video") startAutoplay();
            }}
          >
            <button className="carousel__btn" onClick={prev} aria-label="Forrige">
              <FaArrowLeft className="carousel__btn--icon" />
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
              </figure>
            </div>

            <button className="carousel__btn" onClick={next} aria-label="Neste">
              <FaArrowRight className="carousel__btn--icon" />
            </button>

            <div className="carousel__dots" aria-label="Bildevelger">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`carousel__dot ${i === index ? "is-active" : ""}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Gå til ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="project">
          <div className="project__description">
            <p>{project.fullDescription}</p>
          </div>

          <div className="project__tech--container">
            <h3>Teknologier</h3>
            <ul className="project__tech">
              {project.technologies.map((t) => (
                <li key={t} className="project__tech--li">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {project.collaborations?.length > 0 && (
            <div className="project__collab--container">
              <h3>Samarbeid</h3>
              <ul className="project__collab">
                {project.collaborations.map((person) => (
                  <li key={person.linkedin} className="project__collab--li">
                    <a href={person.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedin className="project__collab--icon" />
                      {person.name}
                    </a>
                    {person.role && ` – ${person.role}`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="lenker">
            <h3>GitHub kode og live side</h3>
            {project.githubUrl && (
              <a
                className="lenker__link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="lenker__icon" />
                View project on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                className="lenker__link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <TbWorldWww className="lenker__icon" />
                View project Live
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}