'use client'
import React, { useEffect, useState } from 'react';
import FormationApis from '../_utils/FormationApis';
import BreadCumb from '../_components/BreadCumb';

function Page({ params }) {
  const [formationDetails, setFormationDetails] = useState(null); // Initialise à null

  useEffect(() => {
    getFormationById_();
  }, [params?.id]);

  const getFormationById_ = () => {
    FormationApis.getFormationById(params?.id).then(res => {
      console.log('formation item', res.data.data);
      setFormationDetails(res.data.data);
    }).catch(error => {
      console.error('Error fetching formation details:', error);
      setFormationDetails(null); // Assure que l'état est bien géré en cas d'erreur
    });
  };

  if (!formationDetails) {
    return <p>Loading...</p>; // Affiche un message pendant le chargement des données
  }

  const { attributes } = formationDetails;

  return (
    <div>
      <BreadCumb />
      
      <section className="course-details space-top space-extra-bottom">
        <div className="container">
          <div className="mega-hover course-img">
            <img src={attributes?.Image.data.attributes.formats.thumbnail.url} alt="formation"   style={{ width: '1500px', height: 'auto' }} />
          </div>
          <div className="row flex-row-reverse">
            <div className="col-lg-4">
              <div className="course-meta-box">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <i className="far fa-hourglass" />
                        Durée:
                      </th>
                      <td>{attributes?.Duree} semaines</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-clock" />
                        Prix:
                      </th>
                      <td>{attributes?.Prix} $</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-user-alt" />
                        Participants:
                      </th>
                      <td>{attributes?.Capacite} participants</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="far fa-suitcase" />
                        Type Formation:
                      </th>
                      <td>{attributes?.TypeFormation}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="contact.html" className="vs-btn">
                  S'inscrire
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="course-category">
                <a href="course.html">{attributes?.Categorie}</a>
              </div>
              <h2 className="course-title">
                {attributes?.Nom}
              </h2>
              <div className="course-review">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" /> ( {attributes?.Review} )
              </div>
              <h5 className="border-title2">Description</h5>
              <p>
                {attributes?.Description}
              </p>
    
              <div className="inner-video-box">
                <img
                  src="assets/img/course/course-details-2.jpg"
                  alt="video"
                />
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn position-center popup-video"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <a href="contact.html" className="vs-btn">
                S'inscrire maintenant
              </a>
              <span className="available-badge">
                {attributes?.Disponibilite ? "Disponible" : "Indisponible"}
              </span>
              <div className="mt-4 pt-lg-2">
                <h5 className="border-title2">Objectif de la formation !</h5>
                <div className="list-style1 vs-list">
                  <ul>
                    {attributes?.But?.map((item, index) => (
                      <li key={index}>
                        {item.children.map((child, childIndex) => (
                          <React.Fragment key={childIndex}>
                            {child.text}
                          </React.Fragment>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
