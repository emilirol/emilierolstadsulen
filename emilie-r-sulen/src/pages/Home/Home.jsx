import { Link } from "react-router-dom"
import "../../styles/main.css"

export default function Home(){
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

            <main id="front_page">
                <Link className="borderShine" id="diplom" to="/about" aria-label="Gå til Om meg">
                <img src="/diplom.webp" alt="Pixel bilde av et diplom" />
                </Link>

                <div className="borderShine" id="phone">
                <img src="" alt="" />
                </div>

                <div className="borderShine" id="album">
                <img src="" alt="" />
                </div>
            </main>

            <footer className="site-footer">
                <p>Created by Emilie Rolstad Sulen</p>
                <p>&copy; 2026 Emilie Rolstad Sulen</p>
            </footer>

        </>
    )
}


