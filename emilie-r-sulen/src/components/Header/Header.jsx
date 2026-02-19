import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/main.css"
import { GiHeartOrgan } from "react-icons/gi";
import { GiMushroomHouse } from "react-icons/gi";

export default function Header(){
    const location = useLocation();

    const isOnProjectsPage = location.pathname.startsWith("/projects");
    const isOnContactPage = location.pathname.startsWith("/contact");
    const isOnAboutPage = location.pathname.startsWith("/about");


    return (
        <header className="site-header">
            <h1>Emilie Rolstad Sulen</h1>
                <p>Sykepleier og snaaart fullstackutvikler med <GiHeartOrgan className="rect_icon--heart" /> for brukervennlighet og design</p>
                <Link to="/" className="site-header__link"><GiMushroomHouse className="react_icon--house" />Hjem</Link>
                
                {!isOnAboutPage && (
                    <Link className="zoom-out" to="/about">Om meg</Link>
                 )}
                
                {!isOnContactPage && (
                    <Link className="zoom-out" to="/contact">Kontakt meg</Link>
                )}
                
                {!isOnProjectsPage && (
                    <Link className="zoom-out" to="/projects">Prosjekter</Link>
                ) }
                
            </header>
    );
}



