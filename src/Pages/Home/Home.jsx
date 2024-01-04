import React from 'react';
import { useState, useEffect } from 'react';
import '../Home/home.scss';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Cards/Cards';
import homeBanner from '../../assets/home-banner.png';
import ListeLogements from '../../assets/logements.json';




function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(ListeLogements);

    }, [data]);

    return (
        <section className='home'>
            <Banner image={homeBanner} texte="Chez vous, partout et ailleurs" />
            <div className="cards-container">
                {data.length > 0 ? (
                    <>
                        {data.map((logement) => (


                            <Card link={"ficheLogement/" + logement.id} key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />


                        ))}
                    </>
                ) : (
                    <p>Une erreur est survenue lors de l'affichage des logements !</p>
                )}


            </div>
        </section>
    )
}








export default Home;