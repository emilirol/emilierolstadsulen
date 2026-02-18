import React from "react"
import { Link } from "react-router-dom"
import "../../styles/main.css"
import Header from "../../assets/components/Header/Header.jsx"
import Footer from "../../assets/components/Footer/Footer.jsx"

export default function About(){
    return (
        <>
            <Header />
            <main id="about">
                <h1 id="name">Hvem er jeg?</h1>
                    <p>
                        Hei! 
                        Jeg er Emilie, webutvikler og sykepleier. 
                        Min lidenskap er å utvikle brukervennlige sider, med et kreativt og personlig utrykk.
                        Når jeg ikke koder, bruker jeg tiden min på familien, leser en bok, strikker eller gamer. 
                    </p>
                <h2>Erfaring</h2>
                <div>
                <h3>Utdannelse</h3>
                    <ul>
                        <li>2023 - 2026 : Bachelor i webutvikling</li>
                        <li>2013 - 2016 : Bachelor i sykepleie</li>
                        <li>2019 - 2021 : Videreutdannelse i psykisk helsearbeid</li>
                    </ul>

                
                <h3>Jobb erfaring</h3>
                    <ul>
                        <li>2025 : Praksis IT utvikler</li>
                        <li>2021 - 2023 : Spesialsykepleier</li>
                        <li>2016 - 2021 : Sykepleier</li>
                    </ul>
                </div>

                <h3>Teknologier</h3>
                <div>
                    <h4>Programmeringsspråk</h4>
                        <img className="" srcSet="/icons/html-icon.png" alt="HTML Icon" loading="lazy" sizes=""/>
                        <img className="" srcSet="/icons/css-icon.png" alt="CSS Icon" loading="lazy" sizes=""/>
                        <img className="" srcSet="/icons/javascript-icon.png" alt="JavaScript Icon" loading="lazy" sizes=""/>
                        <img className="" srcset="/icons/python-icon.png" alt="Python Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/php-icon.png" alt="PHP Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/csharp-icon.png" alt="C# Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/sql-icon.png" alt="SQL Icon" loading="" sizes="" />

                </div>
                <div>
                    <h4>Frontend og backend</h4>
                        <img className="" srcset="/icons/react-icon.png" alt="React Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/svelte-icon.png" alt="Svelte Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/sass-icon.png" alt="SASS Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/node.js-icon.png" alt="Node.js Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/express-icon.png" alt="Express Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/.net-icon.png" alt=".NET Icon" loading="" sizes="" />
                </div>
                <div>
                    <h4>Andre verktøy</h4>
                        <img className="" srcset="/icons/vscode-icon.png" alt="Visual Studio Code Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/visualstudio-icon.png" alt="Visual Studio Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/github-icon.png" alt="GitHub Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/terminal-icon.png" alt="Terminal Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/figma-icon.png" alt="Figma Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/docker-icon.png" alt="Docker Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/mongodb-icon.png" alt="Mongo DB Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/postgresql-icon.png" alt="PostgreSQL Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/mysql-icon.png" alt="MySQL Icon" loading="" sizes="" />
                        <img className="" srcset="/icons/elasticsearch-icon.webp" alt="Elasticsearch Icon" loading="" sizes="" />
                </div>

                <img id="about-image" srcSet="/images/profile_picture.webp" alt="Image of girl with glasses with a heart" loading="lazy" sizes=""/>
                <div className="animals">
                    <p>
                        Jeg elsker dyr, men er allergisk mot katter, hunder og hester.. 
                        Likevel har vi den søsteste lille djevelen av en kattepus. 
                        Ironisk nok er hun oppkalt etter et tegneserie hamster, og heter Klara.
                    </p>
                </div>
                <div className="nurse">
                    <p>
                        Jeg er utdannet spesialsykepleier i psykisk helsearbeid, 
                        men byttet ut en sikker jobb situasjon for å bli webutvikler i 2023.
                    </p>
                </div>
                <div className="family">
                    <p>
                        Jeg er en typisk familiekjær kvinne, gift med en fire år gammel sønn.
                    </p>
                </div>
                <div className="small-farm">
                    <p>
                        Når jeg vokser opp, ønsker jeg meg ett småbruk hvor jeg kan ha kyllinger
                        og alpakkaer. 
                    </p>
                </div>

            </main>
            <Footer />
        </>
    )
}