import homeBanner from '../../assets/home-banner.png';
import '../Banner/banner.scss';

function Banner() {
return (
    <div className='banner'>
        <img src={homeBanner} className="banner__img" alt="Banner" />
        <h1 className="banner__title">Chez vous, <br className="mobile-break"/>partout et ailleurs</h1>
    </div>
)

}

export default Banner