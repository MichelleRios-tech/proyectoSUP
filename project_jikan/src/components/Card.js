import React from 'react'
//import { Link } from 'react-router-dom'

function Card({anime}) {
    
   // console.log('--------------');
    console.log(anime)
    return (
<<<<<<< Updated upstream:project_jikan/src/components/Card.js
        <div>
            <img src ={img_url} alt='portada'/>
            <h2>{tittle}</h2>
=======
        <div className='CardElement'>
            <img className='animeIMG' src ={anime.image_url} alt='portada'/>
            <h2>{anime.title}</h2>
>>>>>>> Stashed changes:project_jikan/src/components/Card/Card.js
        </div>
    )
}

export default Card
