import React from 'react';
import Script from 'next/script';

function Header() {
  return (
    <>
      <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Educino - Centre de formation</title>
  <meta name="author" content="Vecuro" />
  <meta
    name="description"
    content="Educino - Online Courses and Education HTML Template"
  />
  <meta
    name="keywords"
    content="academic, artist, center, club, coach, college, drive, driving, education, entertainment, gambling, golf, jackpot, knowledge, money, multipurpose, music, song, student"
  />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no"
  />
  <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/app.min.css" />
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
      <header className="vs-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-between align-items-center gx-50">
              <div className="col d-none d-xl-block">
                <div className="header-social">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-md-auto text-center">
  <div className="header">
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownLangue" data-bs-toggle="dropdown" aria-expanded="false">
        Langue
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownLangue">
        <li><a className="dropdown-item" href="#">Français</a></li>
        <li><a className="dropdown-item" href="#">Arabe</a></li>
      </ul>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="container position-relative z-index-common">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="vs-logo">
                    <a href="/">
                      <img src="assets/img/logo.svg" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col text-end text-xl-center">
                  <nav className="main-menu menu-style1 d-none d-lg-block">
                    <ul>
                      <li><a href="/">ACCEUIL</a></li>
                      <li><a href="/formations">FORMATIONS</a></li>
                      <li><a href="#">EVENEMENTS</a></li>
                      <li><a href="#">A PROPOS</a></li>
                      <li><a href="#">CONTACT</a></li>
                    </ul>
                  </nav>
                  <button className="vs-menu-toggle d-inline-block d-lg-none">
                    <i className="fal fa-bars" />
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-btns">
                    <button type="button" className="searchBoxTggler"><i className="far fa-search" /></button>
                    <a href="#" className="vs-btn style4"><i className="fal fa-hand-holding-heart" /> Faire un don</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
