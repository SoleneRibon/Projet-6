import React from 'react';
import '../Home/home.scss';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';
import homeBanner from '../../assets/home-banner.png';



function Home() {


    return (
        <section className='home'>
            <Banner image={homeBanner} texte="Chez vous, partout et ailleurs"/>
            <Gallery />
         </section>
    )
}

        
            


export default Home;