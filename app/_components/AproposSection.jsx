import React from 'react'

function AproposSection() {
  return (
    <div><section className="space-top space-extra-bottom" style={{ marginTop: '-20px' }} data-bg-src="assets/img/bg/course-bg-pattern.jpg">
    <div className="container">
      <div className="title-area text-center">
        <span className="sec-subtitle">À PROPOS DE NOS CENTRES DE FORMATION</span>
        <h2 className="sec-title h1">Comment ça fonctionne</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg process-inner1 order-2 order-lg-1">
          <div className="process-style1">
            <span className="process-number">1</span>
            <div className="process-content">
              <h3 className="process-title">Choisissez votre formation</h3>
              <p className="process-text">
                Explorez une variété de formations adaptées à vos besoins.
              </p>
            </div>
          </div>
          <div className="process-style1">
            <span className="process-number">2</span>
            <div className="process-content">
              <h3 className="process-title">Inscrivez-vous facilement</h3>
              <p className="process-text">
                Inscription simple et rapide en quelques étapes seulement.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 mb-30 mb-md-5 mb-lg-0">
          <div className="img-box1 style2">
            <div className="vs-circle">
              <div className="mega-hover">
                <img src="assets/img/about/about-2-1.png" alt="banner" />
                <a
                  href="https://www.youtube.com/watch?v=XmISl2xZnKY"
                  className="vs-btn style7 popup-video"
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <i className="fas fa-play" />
                  
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg process-inner2 order-3">
          <div className="process-style1">
            <span className="process-number">3</span>
            <div className="process-content">
              <h3 className="process-title">Profitez des cours pratiques</h3>
              <p className="process-text">
                Apprenez directement dans nos centres avec des formateurs qualifiés.
              </p>
            </div>
          </div>
          <div className="process-style1">
            <span className="process-number">4</span>
            <div className="process-content">
              <h3 className="process-title">Obtenez votre certification</h3>
              <p className="process-text">
                Recevez une certification reconnue à la fin de votre formation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default AproposSection