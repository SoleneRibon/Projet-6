import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carrousel from '../../Components/Carrousel/Carrousel';
import ListeLogements from '../../assets/logements.json';
import '../ficheLogements/logement.scss'
import Collapse from '../../Components/Collapse/Collapse';
import starActive from '../../assets/starActive.png';
import starInactive from '../../assets/starInactive.png';

function Logement() {

    const { id } = useParams();
    const navigate = useNavigate()
    const logement = ListeLogements.find(logement => logement.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/erreur');
        }
    }, [logement, navigate]);


    if (!logement) {
        return null;
    }



    const equipements = logement.equipments.map((equipments, index) => {
        return <li key={index}>{equipments}</li>
    })




    return (
        <section className='logement'>
            <Carrousel images={logement.pictures} />
            <div className='logement__fichelogement'>
                <div className='logement__information'>
                    <h2 className='logement__title'>{logement.title}</h2>
                    <p className='logement__location'>{logement.location}</p>
                    <div className='logement__tags'>
                        {logement.tags.map((tags) => (
                            <div className='logement__tag'>{tags}</div>
                        ))}
                    </div>
                </div>
                <div className='logement__hostInformation'>
                    <div className='logement__details'>
                        <p className='logement__host'>{logement.host.name}</p>
                        <img className='logement__img' src={logement.host.picture} alt="photo de l'host" />
                    </div>
                    <div className="logement__rating">
                        {[1, 2, 3, 4, 5].map((rating, index) => (
                            <span
                                key={index}
                                className={rating <= logement.rating ? "filled" : "empty"}
                            >
                                {rating <= logement.rating ? (
                                    <img src={starActive} alt="starActive" />
                                ) : (
                                    <img src={starInactive} alt="starInactive" />
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='logement__collapse'>
                <Collapse className='logement__description' titre='Description' description={logement.description} />
                <Collapse className='logement__equipments' titre='Equipements' description={equipements} />
            </div>
        </section>
    )
}



export default Logement;