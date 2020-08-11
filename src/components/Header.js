import React from 'react';
import logo from '../images/logo.svg';
import '../App.css';

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='logo image' />
            <div className='header-nav'>
            <a href='#'>HOW WE WORK</a>
            <a href='#'>BLOG</a>
            <a href='#'>ACCOUNT</a>
            </div>
            <button>VIEW PLANS</button>
        </div>
    )
}
