import React,{useState} from 'react'
import '../App.css';

export default function Card({icon,name,description}) {
    return (
        <div className='card-container'>
            <div className='card'>
            <img src={icon} alt='Icon'/>
            <h4>{name}</h4>
            <p>{description}</p>
            </div>
        </div>
    )
}
