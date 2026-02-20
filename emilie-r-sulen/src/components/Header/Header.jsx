import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/main.css"
import { GiMushroomHouse } from "react-icons/gi";

export default function Header(){
    const location = useLocation();

    const isOnProjectsPage = location.pathname.startsWith("/projects");
    const isOnContactPage = location.pathname.startsWith("/contact");
    const isOnAboutPage = location.pathname.startsWith("/about");


    return (
        <header className="site-header">
            <div className="header_logo">
                <h1>Emilie Rolstad Sulen</h1>
            </div>

            
                
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



