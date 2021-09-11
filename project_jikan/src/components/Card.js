import React from 'react'
//import { Link } from 'react-router-dom'

function Card({Titulo, Imagen }) {
    
   // console.log('--------------');
    //console.log(anime)
    return (
        <div>
            <img src ={Imagen} alt='portada'/>
            <h2>{Titulo}</h2>
        </div>
    )
}

export default Card
