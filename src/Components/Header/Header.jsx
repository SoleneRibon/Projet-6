import React from 'react';
import Nav from '../Nav/Nav';
import logo from '../../assets/logo.png';
import '../Header/header.scss'

 
function Header() {
    return (
        <header className="header">
            <figure className='header__figure'>
            <img src={logo} alt="Le logo Kasa" className="header__logo"/>
            </figure>
            <Nav className="nav-bar" />
        </header>
        
    )
}

export default Header;