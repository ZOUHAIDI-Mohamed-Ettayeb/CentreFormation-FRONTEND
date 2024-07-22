import React from 'react'

function SliderSection() {
  return (
    <div><section className="hero-layout1">
    <div
      className="vs-carousel"
      data-fade="true"
      data-arrows="true"
      data-dots="true"
    >
      <div>
        <div className="hero-inner">
          <div className="hero-bg" data-bg-src="assets/img/hero/hero-1-1.jpg" />
          <div className="vs-circle animated" />
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title animated">
                LE <span>#1 SITE DES FORMATIONS</span> AU MAROC
              </h1>
              <p className="hero-text animated">
                Découvrez nos centres de formation spécialisés dans plusieurs métiers.
              </p>
              <div className="hero-btns animated">
                <a href="/formations" className="vs-btn style5">
                  <i className="far fa-angle-right" />
                  Explorez nos Formations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-inner">
          <div className="hero-bg" data-bg-src="assets/img/hero/hero-1-2.jpg" />
          <div className="vs-circle animated" />
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title animated">
                <span>Votre Avenir</span> avec Nos Formations
              </h1>
              <p className="hero-text animated">
                Participez à des formations de haute qualité pour améliorer votre expertise.
              </p>
              <div className="hero-btns animated">
                <a href="/formations" className="vs-btn style5">
                  <i className="far fa-angle-right" />
                  Explorez nos Formations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-inner">
          <div className="hero-bg" data-bg-src="assets/img/hero/hero-1-3.jpg" />
          <div className="vs-circle animated" />
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title animated">
                Excellence en <span>Formation Professionnelle</span>
              </h1>
              <p className="hero-text animated">
                Améliorez vos compétences avec des formations dispensées par des experts.
              </p>
              <div className="hero-btns animated">
                <a href="/formations" className="vs-btn style5">
                  <i className="far fa-angle-right" />
                  Explorez nos Formations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section></div>
  )
}

export default SliderSection