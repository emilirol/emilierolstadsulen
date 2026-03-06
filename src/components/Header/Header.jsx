import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/main.css";
import { GiMushroomHouse } from "react-icons/gi";
import { FaCircle } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const location = useLocation();

  const isOnProjectsPage = location.pathname.startsWith("/projects");
  const isOnContactPage = location.pathname.startsWith("/contact");
  const isOnAboutPage = location.pathname.startsWith("/about");

  const text = "Emilie Rolstad Sulen";

  const [menuOpen, setMenuOpen] = useState(false);

  // Lukk meny hvis man går over 760px
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 761px)");
    const handler = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    // Safari-støtte
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

     // Lukk meny når route endres
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

  const links = useMemo(
    () => (
      <>
        <Link className="zoom-out" to="/">
          {/*<GiMushroomHouse className="react__icon--house" />*/}
          Hjem
        </Link>
        {!isOnAboutPage && (
          <Link className="zoom-out" to="/about">
            Om meg
          </Link>
        )}
        {!isOnContactPage && (
          <Link className="zoom-out" to="/contact">
            Kontakt meg
          </Link>
        )}
        {!isOnProjectsPage && (
          <Link className="zoom-out" to="/projects">
            Prosjekter
          </Link>
        )}
      </>
    ),
    [isOnAboutPage, isOnContactPage, isOnProjectsPage]
  );

  return (
    <header className="site__header">
      <div className="header_logo">
        <h1 className="logo">
          {text.split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
              {letter}
            </span>
          ))}
        </h1>

        <p>
          <FaCircle className="react__icon--dot" />
          Tilgjengelig for arbeid
        </p>
      </div>

      {/* Desktop links */}
      <nav className="site__header--links" aria-label="Hovedmeny">
        {links}
      </nav>

      {/* Burger-knapp (vises kun < 760px via CSS) */}
      <button
        className="burger"
        type="button"
        aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
        aria-controls="mobileMenu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <RxHamburgerMenu className="burger__line--icon"/>
      </button>

      {/* Backdrop + mobilmeny */}
      <div
        className={`menu__backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <nav
        id="mobileMenu"
        className={`mobile__menu ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobilmeny"
      >
        {links}
      </nav>
    </header>
  );
}
