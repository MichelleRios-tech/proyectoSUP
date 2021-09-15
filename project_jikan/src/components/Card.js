import React from 'react'
//import { Link } from 'react-router-dom'

function Card({anime}) {
    
   // console.log('--------------');
    console.log(anime)
    return (
        <div className='CardElement'>
            <img className='animeIMG' src ={anime.image_url} alt='portada'/>
            <h2>{anime.title}</h2>
        </div>
    )
}

export default Card
