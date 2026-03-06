import React from "react"
import { Link } from "react-router-dom"
import "../../styles/main.css"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { GiHeartOrgan } from "react-icons/gi";

/*
<picture>
    <source type="image/avif" srcset="/images/320.avif 320w, /images/640.avif 640w, /images/960.avif 960w, /images/1280.avif 1280w">
    <source type="image/webp" srcset="/images/320.webp 320w, /images/640.webp 640w, /images/960.webp 960w, /images/1280.webp 1280w">
    <img src="/images/1280.jpg"
         srcset="/images/320.jpg 320w, /images/640.jpg 640w, /images/960.jpg 960w, /images/1280.jpg 1280w"
         sizes="100vw"
         width="1280" height="853"
         alt="Graffiti on a wall of Donald Trump, Putin and Kim Jong-Un"
         decoding="async"
         fetchpriority="high">
  </picture>
  */

export default function Home(){
    return (
        <>
            <Header/>

            <div id="front_page">
                <div>
                    <p >Sykepleier og snaaart fullstackutvikler med <GiHeartOrgan className="react__icon--heart" /> for brukervennlighet og design</p>
                </div>
                <div className="hero">
                    <picture>
                        <source 
                            src="/images/portefølje-bakgrunn-mobil.webp" 
                            media="(max-width: 760px)" 
                            type="image/webp"
                        />

                        <img 
                            className="hero__img"
                            src="/images/portefølje_bakgrunn.webp"
                            alt="Portefølje bakgrunn"
                        />
                    </picture>
                </div>
            </div>

            <Footer/>

        </>
    )
}


