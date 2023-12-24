import React from 'react';
import '../Cards/cards.scss';
import { useState, useEffect } from 'react';
import ListeLogements from '../../assets/logements.json';



function Card() {

    const [data, setData] = useState([]);
    const [slicedData, setSlicedData] = useState(data.slice(0, 6));

    useEffect(() => {
        setData(ListeLogements);
        // Création d'une fonction fléchée récupérant les informations du BP désiré
        const breakpointCards = () => {
            const breakpoint = 630;
            const windowWidth = window.innerWidth;

            // Vérification de la taille de l'écran en fonction du BP désiré
            if (windowWidth <= breakpoint) {
                // Découpe les données pour en récupérer que 3
                setSlicedData(data.slice(0, 3));
            } else {
                // Découpe les données pour en récupérer que 6
                setSlicedData(data.slice(0, 6));
            }

        };

        // Écoute l'evenement de changement de taille de l'écran
        window.addEventListener('resize', breakpointCards);
        // Lancement de la fonction
        breakpointCards();

        // Supprime l'écouteur quand le composant n'existe plus
        return () => {
            window.removeEventListener('resize', breakpointCards());
        }
    }, [data]);

    return (
        <>
            {slicedData.length > 0 ? (
                <>
                    {slicedData.map((logement) => (
                        <article className="card" key={logement.id}>
                            <img className="card__img" src={logement.cover} alt="" />
                            <div className="card__overlay">
                                <h2 className='card__text'>{logement.title}</h2>
                            </div>
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