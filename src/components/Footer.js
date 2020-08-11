import React,{useState} from 'react'

export default function Footer({name,links}) {
    return (
        <div>
            <label>{name}</label>
            <ul>
                {links}
            </ul>
        </div>
    )
}
