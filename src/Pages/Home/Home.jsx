import React from 'react';
import '../Home/home.scss';
import Banner from '../../Components/Banner/Banner';

function Home(){
    return (
        <section className='home'>
           <Banner className='home__banner'/>
        </section>
    )
}

export default Home;