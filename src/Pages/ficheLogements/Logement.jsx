import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../Components/Carrousel/Carrousel';
import ListeLogements from '../../assets/logements.json';
import homeBanner from '../../assets/home-banner.png';
import aboutBanner from '../../assets/aboutBanner.png'

function Logement() {

    const { id } = useParams();
    const logement = ListeLogements.find(logement => logement.id === id);


    return (
        <>
           <Carrousel images={logement.pictures} />
        </>
    )
}



export default Logement;