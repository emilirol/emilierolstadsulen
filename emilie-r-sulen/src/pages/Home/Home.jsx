import React from "react"
import { Link } from "react-router-dom"
import "../../styles/main.css"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { GiHeartOrgan } from "react-icons/gi";

export default function Home(){
    return (
        <>
            <Header/>

            <main id="front_page">
                <div>
                    <p>Sykepleier og snaaart fullstackutvikler med <GiHeartOrgan className="rect_icon--heart" /> for brukervennlighet og design</p>
                </div>


                <Link className="borderShine" id="diplom" to="/about" aria-label="Gå til Om meg">
                <img srcSet="/images/diplom.webp" alt="Pixelbilde av et diplom" />
                </Link>

                <Link className="borderShine" id="phone" to="/contact" aria-label="Gå til Kontakt meg">
                <img srcSet="/images/adressebok.webp" alt="Pixelbilde av en adressebok" />
                </Link>

                <Link className="borderShine" id="album" to="/projects" aria-label="Gå til Prosjekter">
                <img srcSet="/images/album.webp" alt="Pixelbilde av et album" />
                </Link>
            </main>

            <Footer/>

        </>
    )
}


