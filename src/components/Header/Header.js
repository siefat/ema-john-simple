import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import'./Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img  className='logo' src={logo} alt="" />
       <nav>
        <Link to='/shope'>Shope</Link>
        <Link to='/orders'>Order Review </Link>
        <Link to='/inventory'>Manage Inventory Here</Link>
           </nav>
        </div>
    );
};

export default Header;