import React from "react"
import "../../styles/main.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";

export default function Footer(){

    return (
        <footer>
            <p>Denne siden er utviklet av Emilie Rolstad Sulen</p>
            <p>All tekst og bilder &copy; 2026 Emilie Rolstad Sulen</p>

            <div className="site__footer--contact">
                <a href="mailto:emilie_rolstad@hotmail.com"><TbMailHeart className="react__icon"/></a>
                <a href="https://github.com/emilirol" target="_blank"><FaGithub className="react__icon"/></a>
                <a href="https://linkedin.com/in/emilie-sulen-788778248" target="_blank"><FaLinkedin className="react__icon"/></a>
            </div>
        </footer>
    )
}

