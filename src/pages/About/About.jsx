import React from "react";
import "../../styles/main.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { PiLegoSmileyFill } from "react-icons/pi";
import { FaUserNurse } from "react-icons/fa";
import { SiOllama } from "react-icons/si";

export default function About() {
    const birthDate = new Date(1992, 7, 7); 
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    };

    const sonBDay = new Date (2021, 10, 25);
    let sonAge = today.getFullYear() - sonBDay.getFullYear();
    const sonMonthDifference = today.getMonth() - sonBDay.getMonth();

    if (
        sonMonthDifference < 0 ||
        (sonMonthDifference === 0 && today.getDate() < sonBDay.getDate())
    ) {
        sonAge--;
    };

  const skills = {
    programmeringssprak: [
      { label: "HTML", src: "/icons/html-icon.png" },
      { label: "CSS", src: "/icons/css-icon.png" },
      { label: "JavaScript", src: "/icons/javascript-icon.png" },
      { label: "Python", src: "/icons/python-icon.png" },
      { label: "PHP", src: "/icons/php-icon.png" },
      { label: "C#", src: "/icons/csharp-icon.png" },
      { label: "SQL", src: "/icons/sql-icon.png" },
    ],
    frontendBackend: [
      { label: "React", src: "/icons/react-icon.png" },
      { label: "Svelte", src: "/icons/svelte-icon.png" },
      { label: "Sass", src: "/icons/sass-icon.png" },
      { label: "Node.js", src: "/icons/node.js-icon.png" },
      { label: "Express", src: "/icons/express-icon.png" },
      { label: ".NET", src: "/icons/.net-icon.png" },
    ],
    andreVerktoy: [
      { label: "VS Code", src: "/icons/vscode-icon.png" },
      { label: "Visual Studio", src: "/icons/visualstudio-icon.png" },
      { label: "GitHub", src: "/icons/github-icon.png" },
      { label: "Terminal", src: "/icons/terminal-icon.png" },
      { label: "Figma", src: "/icons/figma-icon.png" },
      { label: "Docker", src: "/icons/docker-icon.png" },
      { label: "MongoDB", src: "/icons/mongodb-icon.png" },
      { label: "PostgreSQL", src: "/icons/postgresql-icon.png" },
      { label: "MySQL", src: "/icons/mysql-icon.png" },
      { label: "Elasticsearch", src: "/icons/elasticsearch-icon.webp" },
    ],
  };

  const renderIcons = (items) => (
    <div className="skills__icons">
      {items.map((item) => (
        <div key={item.label} className="icon__wrapper">
          <img
            className="teknologispråk"
            src={item.src}
            alt={`${item.label} ikon`}
            loading="lazy"
          />
          <span className="icon__text">{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      <main id="about">
        <h1 id="name">Hvem er jeg?</h1>
        <div className="about__personal">
            <img
                id="about-image"
                srcSet="/images/profile_picture.webp"
                alt="Image of girl with glasses with a heart"
                loading="lazy"
                sizes=""
            />

            <p>
                Hei! Jeg er Emilie, {age} år, webutvikler og sykepleier. Min lidenskap
                er å utvikle brukervennlige websider og applikasjoner, med et kreativt og personlig utrykk.
                Når jeg ikke koder, bruker jeg tiden min på familien, leser en bok,
                strikker eller gamer.
            </p>
        </div>

        <div className="experience__container">
            <h2 >Erfaring</h2>
            <div className="experience__education">
                <h3>Utdannelse</h3>
                    <ul>
                        <li>2023 - 2026 : Bachelor i webutvikling</li>
                        <li>2019 - 2021 : Videreutdannelse i psykisk helsearbeid</li>
                        <li>2013 - 2016 : Bachelor i sykepleie</li>
                    </ul>
            </div>
            <div className="experience__work">
                <h3>Jobb erfaring</h3>
                    <ul>
                        <li>2025 : Praksis IT utvikler</li>
                        <li>2021 - 2023 : Spesialsykepleier</li>
                        <li>2016 - 2021 : Sykepleier</li>
                    </ul>
            </div>
        </div>

        <div className="skills__container">
            <h2>Teknologier</h2>
        
          <div className="skills__card">
            <h4>Programmeringsspråk</h4>
            {renderIcons(skills.programmeringssprak)}
          </div>

          <div className="skills__card">
            <h4>Frontend og backend</h4>
            {renderIcons(skills.frontendBackend)}
          </div>

          <div className="skills__card">
            <h4>Andre verktøy</h4>
            {renderIcons(skills.andreVerktoy)}
          </div>
        </div>

        <div className="funfacts__container">
          <h2>
            Funfacts 
          </h2>

          <div className="funfacts__cards">
            <p>
              Jeg er utdannet spesialsykepleier i psykisk helsearbeid fra 2021.
            </p>
            <FaUserNurse className="funfact__icon --nurse"/>
          </div>
          <div className="funfacts__cards">
            <p>
              Jeg er en typisk familiekjær kvinne, gift med en {sonAge} år gammel
              sønn. 
            </p>
            <PiLegoSmileyFill className="funfact__icon --lego"/>
            
          </div>

          <div className="funfacts__cards">
            <p>
              Når jeg vokser opp, ønsker jeg meg ett småbruk hvor jeg kan ha
              kyllinger og alpakkaer.
            </p>
            <SiOllama  className="funfact__icon --llama"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}