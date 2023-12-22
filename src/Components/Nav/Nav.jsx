import { Link } from 'react-router-dom'
import React from "react";
import '../Nav/nav.scss'

function Nav () {
    return(
        <nav className='nav-bar'>
            
            <Link to="/" className='nav-bar__link-home'>
                Acceuil
            </Link>
            <Link to="About" className='nav-bar__link-about'>
                A propos
            </Link>

        </nav>
    )
}

export default Nav
