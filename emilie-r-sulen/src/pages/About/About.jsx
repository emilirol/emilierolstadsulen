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
                <h1 id="name">Emilie Rolstad Sulen</h1>
                    <p>
                        Hei! 
                        Jeg er Emilie, webutvikler og sykepleier. 
                        Min lidenskap er å utvikle brukervennlige sider, med et kreativt og personlig utrykk.
                        Når jeg ikke koder, bruker jeg tiden min på familien, leser en bok, strikker eller gamer. 
                    </p>
                <h2>Erfaring</h2>
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

                <img id="about-image" srcset="../public/profile_picture.webp" alt="Image of girl with glasses with a heart" loading="lazy" sizes=""/>
                <div class="animals">
                    <p>
                        Jeg elsker dyr, men er allergisk mot katter, hunder og hester.. 
                        Likevel har vi den søsteste lille djevelen av en kattepus. 
                        Ironisk nok er hun oppkalt etter et tegneserie hamster, og heter Klara.
                    </p>
                </div>
                <div class="nurse">
                    <p>
                        Jeg er utdannet spesialsykepleier i psykisk helsearbeid, 
                        men byttet ut en sikker jobb situasjon for å bli webutvikler i 2023.
                    </p>
                </div>
                <div class="family">
                    <p>
                        Jeg er en typisk familiekjær kvinne, gift med en fire år gammel sønn.
                    </p>
                </div>
                <div class="small-farm">
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