import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

//import { Link } from 'react-router-dom'

function Card({anime}) {

   
   // console.log('--------------');
    console.log(anime);
    const bgIMG = anime.image_url;
    const title = anime.title; 
    const id = anime.mal_id;

    return (
        <div className='CardElement'>
        <Link to ={"/details/"+id}><img className='animeIMG' src ={bgIMG} alt='portada'/></Link>
        <h2>{title}</h2>
        </div>
    )
}

export default Card
