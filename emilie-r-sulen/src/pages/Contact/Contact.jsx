import React from "react"
import { Link } from "react-router-dom"
import "../../styles/main.css"
import Header from "../../assets/components/Header/Header.jsx"
import Footer from "../../assets/components/Footer/Footer.jsx"

export default function Contact(){
    return (
        <>
            <Header />
            <main>
                <h1>Kontakt meg!</h1>
                <p>
                    Kontakt meg gjerne via sosiale media eller send meg en mail for en uforpliktende samtale.
                    Ser fram til å høre fra deg!
                </p>
                <div></div>
            </main>
            <Footer />
        </>
    )
}