import React from 'react';
import '../Home/home.scss';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Cards/Cards';
import homeBanner from '../../assets/home-banner.png';



function Home() {


    return (
        <section className='home'>
            <Banner image={homeBanner} texte ="Chez vous, partout et ailleurs"/>
            <div className="cards-container">
                <Card />
            </div>
         </section>
    )
}

        
            


export default Home;