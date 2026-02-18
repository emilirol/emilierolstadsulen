import React from "react"
import { Link } from "react-router-dom"
import "../../styles/main.css"
import Header from "../../assets/components/Header/Header.jsx"
import Footer from "../../assets/components/Footer/Footer.jsx"

export default function Home(){
    return (
        <>
            <Header/>

            <main id="front_page">
                


                <Link className="borderShine" id="diplom" to="/about" aria-label="Gå til Om meg">
                <img src="/images/diplom.webp" alt="Pixel bilde av et diplom" />
                </Link>

                <div className="borderShine" id="phone">
                {/*<img src="" alt="" />*/}
                </div>

                <div className="borderShine" id="album">
                {/*<img src="" alt="" />*/}
                </div>
            </main>

            <Footer/>

        </>
    )
}


