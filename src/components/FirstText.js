import React from 'react';
import '../App.css';
import intro from '../images/image-intro-desktop.jpg';

export default function FirstText() {
    return (
        <div className='first-text'>
            <div className='intro-text'> 
            <hr></hr>
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster.We blend our expertise and technology 
                to help you find the plan thats right for you.Ensure you and your loved ones are protected.
            </p>
            <button>VIEW PLANS</button>
            </div>
            <div className='intro-img'>
                <img src={intro}/>
            </div>
        </div>
    )
}
