import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex'>
            <h1>Logo</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/news'>News</NavLink>
        </div>
    );
};

export default Header;