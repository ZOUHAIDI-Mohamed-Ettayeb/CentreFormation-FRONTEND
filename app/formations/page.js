'use client'
import React, { useEffect, useState } from 'react';
import FormationList from '../_components/FormationList'; // Chemin d'importation mis à jour
import FormationApis from '../_utils/FormationApis'; // Chemin d'importation mis à jour

function page() {
 
  const [formationList, setFormationList] = useState([]);

  useEffect(() => {
    getLastestFormations_();
  }, []);

  const getLastestFormations_ = () => {
    FormationApis.getLastestFormations().then(res => {
      console.log(res.data.data);
      setFormationList(res.data.data);
    });
  };

  return (
    <div>
      <div className="breadcumb-wrapper" data-bg-src="assets/img/breadcumb/breadcumb-bg.png">
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Nos Formations</h1>
            <p className="breadcumb-text">
              Search over 200 individual encyclopedias and reference books.
            </p>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <a href="/">Acceuil</a>
                </li>
                <li>Nos Formations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <FormationList formationList={formationList} />
          </div>
          <div className="vs-pagination">
            <ul>
              <li className="prev">
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">.....</a>
              </li>
              <li>
                <a href="#">10</a>
              </li>
              <li className="next">
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
