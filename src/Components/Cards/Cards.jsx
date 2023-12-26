import React from 'react';
import '../Cards/cards.scss';
import { useState, useEffect } from 'react';
import ListeLogements from '../../assets/logements.json';
import { Link } from 'react-router-dom';



function Card() {

    const [data, setData] = useState([]);
    const [slicedData, setSlicedData] = useState(data.slice(0, 6));

    useEffect(() => {
        setData(ListeLogements);
       
    }, [data]);

    return (
        <>
            {data.length > 0 ? (
                <>
                    {data.map((logement) => (
                        
                        <article className="card" key={logement.id}> 
                        <Link to='*'>
                            <img className="card__img" src={logement.cover} alt="" />
                            <div className="card__overlay">
                                <h2 className='card__text'>{logement.title}</h2>
                            </div>
                        </Link>
                        </article>
                        
                    ))}
                </>



            ) : (
                <p>Une erreur est survenue lors de l'affichage des logements !</p>
            )}
        </>
    )

}

export default Card;