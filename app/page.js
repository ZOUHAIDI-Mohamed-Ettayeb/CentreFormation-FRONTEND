import React from 'react';
import SliderSection from './_components/SliderSection';
import AproposSection from './_components/AproposSection';
import PartenaireSection from './_components/PartenaireSection';
import FormationSection from './_components/FormationSection';

function Page() {
  return (
    <div>
      <SliderSection />
      <br/>  <br/> <br/>  <br/>
      <FormationSection />
  <AproposSection />
<section className="space-top space-extra-bottom">
    <div className="container">
      <div
        className="title-area text-center wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <span className="sec-subtitle">NOS EVENEMENTS</span>
        <h2 className="sec-title">Actualités &amp; Événements</h2>
      </div>
      <div
        className="row vs-carousel"
        data-slide-show={2}
        data-md-slide-show={2}
      >
        <div className="col-lg-6">
          <div className="vs-blog blog-style1">
            <div className="blog-img">
              <img
                className="w-100"
                src="assets/img/blog/blog-1-1.jpg"
                alt="Blog Img"
              />
            </div>
            <div className="blog-content">
              <div className="date-box">
                <span className="day">12</span>{" "}
                <span className="month">February</span>{" "}
                <span className="post-comment">03 Comments</span>
              </div>
              <h4 className="blog-title">
                <a href="blog-details.html">
                  Group Of Students Sharing Their Ideas
                </a>
              </h4>
              <p>
                Ducamb welcomed every pain avoided but in certa in circumstances
                owing to the claims of igation that off business it will
                frequently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="vs-blog blog-style1">
            <div className="blog-img">
              <img
                className="w-100"
                src="assets/img/blog/blog-1-2.jpg"
                alt="Blog Img"
              />
            </div>
            <div className="blog-content">
              <div className="date-box">
                <span className="day">08</span>{" "}
                <span className="month">December</span>{" "}
                <span className="post-comment">08 Comments</span>
              </div>
              <h4 className="blog-title">
                <a href="blog-details.html">
                  Get Techs HTML5 JS Tutorial For Newbies
                </a>
              </h4>
              <p>
                Ducamb welcomed every pain avoided but in certa in circumstances
                owing to the claims of igation that off business it will
                frequently.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center mb-30">
        <a href="blog.html" className="vs-btn style3 mt-2">
          <i className="far fa-angle-right" />
          Voir tous les événements
        </a>
      </div>
    </div>
  </section>
  <section className="space-top space-bottom" data-bg-src="assets/img/bg/course-list-bg.png">
  <div className="shape-mockup jump d-none d-xxl-block" data-right="10%" data-bottom="12%">
    <div className="shape-dotted" />
  </div>
  <div className="shape-mockup rotate d-none d-xxl-block" data-right="48%" data-top="17%">
    <div className="vs-polygon1" />
  </div>
  <div className="shape-mockup jump-reverse d-none d-xxl-block" data-right="51%" data-top="21%">
    <div className="vs-rounded1" />
  </div>
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-xl-5 col-xxl-5">
        <div className="title-area wow fadeInUp" data-wow-delay="0.3s">
          <span className="sec-subtitle">Ce que disent les participants </span>
          <h2 className="sec-title h1">TÉMOIGNAGES</h2>
        </div>
        <div className="testi-slide1 wow fadeInUp row" data-wow-delay="0.4s">
          <div className="col-auto">
            <div className="media-style6">
              <div className="media-img">
                <img src="assets/img/testimonial/testimonial-3-2.png" alt="Témoignage" />
              </div>
              <div className="media-content">
                <h5 className="media-name">Fatima A.</h5>
                <p className="media-degi">Ancienne participante</p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="media-style6">
              <div className="media-img">
                <img src="assets/img/testimonial/testimonial-3-1.png" alt="Témoignage" />
              </div>
              <div className="media-content">
                <h5 className="media-name">Mohamed B.</h5>
                <p className="media-degi">Ancien participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-xxl-auto align-self-end">
        <div className="testi-style2">
          <div className="testi-shape1" />
          <div className="testi-slide2">
            <div>
              <div className="testi-content">
                <span className="testi-icon">
                  <img src="assets/img/icon/quote.svg" alt="Témoignage Icon" />
                </span>
                <p className="testi-text">
                  "Les formations m'ont donné les compétences nécessaires pour réussir dans ma carrière."
                </p>
                <h4 className="testi-name">Fatima A.</h4>
                <p className="testi-degi">Ancienne participante</p>
              </div>
            </div>
            <div>
              <div className="testi-content">
                <span className="testi-icon">
                  <img src="assets/img/icon/quote.svg" alt="Témoignage Icon" />
                </span>
                <p className="testi-text">
                  "Une expérience enrichissante qui m'a aidé à progresser professionnellement."
                </p>
                <h4 className="testi-name">Mohamed B.</h4>
                <p className="testi-degi">Ancien participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br/> <br/> <br/> <br/> <br/>
<PartenaireSection />
    </div>
    
  );
}

export default Page;
