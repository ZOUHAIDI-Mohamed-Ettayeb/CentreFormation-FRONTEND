import React from 'react'

function BreadCumb() {
  return (
    <div><div
    className="breadcumb-wrapper"
    data-bg-src="public/assets/img/breadcumb/breadcumb-bg.png"
  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Details de la formation </h1>
        <p className="breadcumb-text">
          Search over 200 individual encyclopedias and reference books.
        </p>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/formations">FORMATIONS</a>
            </li>
            <li>
              <a href="#">DETAILS FORMATIONS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default BreadCumb