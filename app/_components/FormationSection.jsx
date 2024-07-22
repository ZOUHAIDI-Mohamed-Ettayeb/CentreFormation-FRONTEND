'use client'
import React, { useEffect ,useState} from 'react'
import FormationList from './FormationList'
import FormationApis from '../_utils/FormationApis'


function FormationSection() {
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
  <div className="row hs wow fadeInUp" 
       data-wow-delay="0.4s" 
       data-slide-show={3} 
       data-lg-slide-show={2} 
       data-md-slide-show={2} 
       data-sm-slide-show={2} 
       data-center-mode="true" 
       data-dots="true">
       
        <div className="title-area text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="sec-icon">
                            <div className="vs-circle" />
                        </div>
                        <span className="sec-subtitle">BIENVENUE AUX CENTRES DE FORMATION</span>
                        <h2 className="sec-title h1">Nos Formations Populaires</h2>
        </div>
    <FormationList formationList={formationList} />
  </div>
);
}

export default FormationSection;