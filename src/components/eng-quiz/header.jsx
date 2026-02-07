import React, { useState } from "react";
import Link from "next/link";
import useSticky from "../../hooks/use-sticky";
import ResponsiveMenu from "./responsive-menu";

const Header = () => {
  const { sticky } = useSticky();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="edu-header header-style-1">
        <div id="edu-sticky-placeholder"></div>

        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-custom">
            <div className="header-navbar">

              {/* LOGO */}
              <div className="header-brand">
                <div className="logo">
                  <Link href="/" className="logo-text">
                    English Practice
                  </Link>
                </div>
              </div>

              {/* DESKTOP MENU */}
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/lessons">Lessons</Link>
                    </li>
                    <li>
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/words">Words</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* RIGHT SIDE */}
              <div className="header-right">
                <ul className="header-action">
                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      ☰
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* MOBILE POPUP MENU */}
        <div className={`popup-mobile-menu ${isOpen ? "active" : ""}`}>
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <Link href="/" className="logo-text">
                  English Practice
                </Link>
              </div>

              <div className="close-menu">
                <button
                  className="close-button"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            <ul className="mainmenu">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lessons" onClick={() => setIsOpen(false)}>
                  Lessons
                </Link>
              </li>
              <li>
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/words" onClick={() => setIsOpen(false)}>
                  Words
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* SIDEBAR MENU (if you still use it) */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
