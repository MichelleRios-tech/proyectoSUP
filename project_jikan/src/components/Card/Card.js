import React from 'react'
import './Card.css'
//import { Link } from 'react-router-dom'

function Card({tittle, img_url}) {
    
   // console.log('--------------');
    console.log([img_url, tittle])
    return (
        <div className='CardElement'>
            <img className='animeIMG' src ={img_url} alt='portada'/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Card
