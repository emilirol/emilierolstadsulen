import React from "react"
import { Link } from "react-router-dom"
import "../../../styles/main.css"

export default function Header(){
    return (
        <header className="site-header">
                <Link to="/" className="site-header__link">Hjem</Link>
                <Link className="zoom-out" to="/about">Om meg</Link>
                <Link className="zoom-out" to="/contact">Kontakt meg</Link>
                <Link className="zoom-out" to="/projects">Prosjekter</Link>
            </header>
    )
}



