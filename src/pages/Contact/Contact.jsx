import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";

export default function Contact(){
    return (
        <>
            <Header />
                <div className="contact__container">
                    <h1>Kontakt meg!</h1>
                        <p>Kjære du som har "forvillet" deg inn på denne nettsiden!</p>
                        <p>Har du et prosjekt eller en idé innen UX-design og/eller utvikling?
                            Jeg hjelper deg gjerne med et eksisterende prosjekt eller om du er på utkikk etter noe helt nytt.
                        </p>
                        <p>
                            Kontakt meg gjerne via sosiale media eller send meg en mail for en uforpliktende samtale.
                        </p>
                        <p>Ser fram til å høre fra deg!</p>
                    
                    <div className="contact__social">
                        <a href="mailto:emilie_rolstad@hotmail.com"><TbMailHeart className="react__icon"/></a>
                        
                        <a href="https://github.com/emilirol" target="_blank"><FaGithub className="react__icon"/></a>
                        <a href="https://linkedin.com/in/emilie-sulen-788778248" target="_blank"><FaLinkedin className="react__icon"/></a>
                        <a href="http://instagram.com/emiliro/" target="_blank"><FaInstagram className="react__icon"/></a>
                    </div>
                </div>
            <Footer />
        </>
    )
}