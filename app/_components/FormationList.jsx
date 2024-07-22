import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// Fonction pour générer les étoiles en fonction de la valeur de review
const renderStars = (review) => {
    const stars = [];
    const roundedReview = Math.round(review); // Arrondir la valeur de la revue

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedReview) {
            stars.push(<i key={i} className="fas fa-star" />);
        } else {
            stars.push(<i key={i} className="far fa-star" />);
        }
    }

    return stars;
};

function FormationList({ formationList }) {
    return (
        <div>
            <section className="space-top space-extra-bottom">
                <div className="container-lg">
                    
                    <div
                        className="row hs-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                        data-slide-show={3}
                        data-lg-slide-show={2}
                        data-md-slide-show={2}
                        data-sm-slide-show={2}
                        data-center-mode="true"
                        data-dots="true"
                    >
                        {formationList.map((formation) => (
                            <div className="col-sm-6 col-xl-4" key={formation.id}>
                                <div className="course-style1" style={{ backgroundColor: 'white', padding: '2px', border: '2px solid #333' }}>
                                    <div className="course-img">
                                        <a href="course-details.html">
                                            <img
                                                className="w-100"
                                                src={formation.attributes.Image.data.attributes.formats.thumbnail.url}
                                                alt="Course Img"
                                            />
                                        </a>
                                        <div className="course-category">
                                            <a href="#">{formation.attributes.Categorie}</a>
                                        </div>
                                        <Link href={`/${formation.id}`} className="vs-btn style4">
                                         
    <i className="fas fa-info"></i>
    Voir détails
</Link>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-top">
                                            <div className="course-review">
                                                {renderStars(formation.attributes.Review)}
                                                ({formation.attributes.Review}.0)
                                            </div>
                                            <span className="course-price">${formation.attributes.Prix}</span>
                                        </div>
                                        <h3 className="h5 course-name">
                                            <a href="#">{formation.attributes.Nom}</a>
                                        </h3>
                                        <div className="course-location">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {formation.attributes.LieuFormation}
                                        </div>
                                    </div>
                                    <div className="course-meta">
                                        <span>
                                            <i className="fal fa-users" />
                                            {formation.attributes.Capacite} Participants
                                        </span>{" "}
                                        <span>
                                            <i className="fal fa-clock" />
                                            {formation.attributes.Duree} Jours
                                        </span>{" "}
                                        <span>
                                            <i className="fal fa-calendar-alt" />
                                            {formation.attributes.DateDebut}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FormationList;
