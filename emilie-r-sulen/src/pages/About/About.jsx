import { Link } from "react-router-dom"
import "../../styles/main.css"

export default function About(){
    return (
        <>
            <header className="site-header">
                <Link to="/" className="site-header__link">
                <img className="logo" src="" alt="" />
                Hjem
                </Link>
                <Link className="zoom-out" to="/about">Om meg</Link>
                <Link className="zoom-out" to="/contact">Kontakt meg</Link>
                <Link className="zoom-out" to="/projects">Prosjekter</Link>
            </header>
            <main id="about">
                <h1 id="name">Emilie Rolstad Sulen</h1>
                <p>
                    
                </p>
                
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
            <footer>
                <p>Created by Emilie Rolstad Sulen</p>
                <p>&copy; 2026 Emilie Rolstad Sulen</p>
            </footer>
        </>
    )
}