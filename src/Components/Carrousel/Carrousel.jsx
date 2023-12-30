import { useState } from 'react';
import '../Carrousel/carrousel.scss';
import homeBanner from '../../assets/home-banner.png';
import fleche from "../../assets/fleche.png";
import ListeLogements from '../../assets/logements.json';



function Carrousel() {



    return (
        <>

            <section className="carrousel">

                <img className="carrousel__fleche carrousel__gfleche" src={fleche} alt="" />
                <img className="carrousel__img" src={homeBanner} alt="logements" />
                <img className="carrousel__fleche carrousel__dfleche" src={fleche} alt="" />

            </section>



        </>




    )

}

export default Carrousel;



