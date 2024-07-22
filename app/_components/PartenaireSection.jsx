import React from 'react'

function PartenaireSection() {
  return (
    <div><div className="space-extra-bottom">
    <div className="container text-center">
      <span className="sec-subtitle2">
      Nos Partenaires{" "}
        <b>
          <u>Ils nous font confiance !</u>
        </b>{" "}
       
      </span>
      <div
        className="row vs-carousel wow fadeInUp"
        data-wow-delay="0.2s"
        data-slide-show={5}
        data-lg-slide-show={5}
        
        
      >
        <div className="col-auto">
          <img src="assets/img/brand/brand-1-5.png" alt="brand" />
        </div>
        <div className="col-auto">
          <img src="assets/img/brand/brand-1-5.png" alt="brand" />
        </div>
        <div className="col-auto">
          <img src="assets/img/brand/brand-1-5.png" alt="brand" />
        </div>
        <div className="col-auto">
          <img src="assets/img/brand/brand-1-5.png" alt="brand" />
        </div>
        <div className="col-auto">
          <img src="assets/img/brand/brand-1-5.png" alt="brand" />
        </div>
        <div className="col-auto">
          <img src="assets/img/brand/brand-1-5.png" alt="brand" />
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default PartenaireSection