import React from 'react';
import '../About/about.scss';
import aboutBanner from '../../assets/aboutBanner.png'
import Banner from '../../Components/Banner/Banner';
import Collapse from '../../Components/Collapse/Collapse'

 function About(){
    return (
    <section className='about'>
        
        <Banner image={aboutBanner}/>
        <Collapse/>
        <Collapse/>
     </section>
    )
}

export default About;
