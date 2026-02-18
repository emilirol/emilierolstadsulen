import React from "react"
import { Link } from "react-router-dom"
import "../../../styles/main.css"
import { GiHeartOrgan } from "react-icons/gi";
import { GiMushroomHouse } from "react-icons/gi";

export default function Header(){
    return (
        <header className="site-header">
            <h1>Emilie Rolstad Sulen</h1>
                <p>Sykepleier og snaaart fullstackutvikler med <GiHeartOrgan className="rect_icon--heart" /> for brukervennlighet og design</p>
                <Link to="/" className="site-header__link"><GiMushroomHouse className="react_icon--house" />Hjem</Link>
                <Link className="zoom-out" to="/about">Om meg</Link>
                <Link className="zoom-out" to="/contact">Kontakt meg</Link>
                <Link className="zoom-out" to="/projects">Prosjekter</Link>
            </header>
    )
}



