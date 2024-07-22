import React from 'react';
import Script from 'next/script';

function Footer() {
  return (
    <>
      <footer className="footer-wrapper footer-layout1">
        <div className="shape-mockup jump d-none d-xxxl-block" data-bottom="0%" data-left="-270px">
          <div className="vs-border-circle" />
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="vs-widget-about">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/img/logo-white.svg" alt="logo" />
                      </a>
                    </div>
                    <p className="footer-text">
                      Lorem ipsum dolor sit amet, consectet rem ips dolor sit amet.
                      sum dolor sit amet, consectet e dolor sit amet, comod.
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-phone-alt" />
                      <a className="text-inherit" href="tel:++11234562228">(00) 123 456 789</a>
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-envelope" />
                      <a className="text-inherit" href="mailto:info@example.com">hello@domainname.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-xl-auto">
                <div className="widget nav_menu footer-widget">
                  <h3 className="widget_title">LIENS</h3>
                  <div className="menu-all-pages-container footer-menu">
                    <ul className="menu">
                      <li><a href="/formations">Nos formations</a></li>
                      <li><a href="blog.html">Nos evenements</a></li>
                      <li><a href="course.html">A propos</a></li>
                      <li><a href="find-tutor-2.html">Contactez-nous</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">GALERIE</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-course"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="text-center col-lg-auto">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> 2024  
                  <a href="#"> Al Mobadara</a>. All Rights Reserved By
                  <a href="https://themeforest.net/user/vecuro_themes"> Xelops Technology</a>
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="social-style1">
                  <a href="#"><i className="fab fa-facebook-f" /> Facebook</a>
                  <a href="#"><i className="fab fa-twitter" /> Twitter</a>
                  <a href="#"><i className="fab fa-linkedin-in" /> Linked In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" className="scrollToTop scroll-btn">
        <i className="far fa-arrow-up" />
      </a>
      <Script src="assets/js/vendor/jquery-3.6.0.min.js" />
      <Script src="assets/js/app.min.js" />
      <Script src="assets/js/main.js" />
    </>
  );
}

export default Footer;
