import React from 'react';
import '../Home/home.scss';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';



function Home() {


    return (
        <section className='home'>
            <Banner className='home__banner' />
            <Gallery />
         </section>
    )
}

        
            


export default Home;