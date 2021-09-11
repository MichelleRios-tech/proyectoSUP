import React, { useState } from 'react'
import Card from './Card';
//const axios = require('axios')

function Landing() {
    
    const [newAnime, setNewAnime] = useState({});
     
         fetch('https://api.jikan.moe/v3/anime/1')
        .then (r => r.json())
        .then (recurso => {
               const anime = {
                Imagen: recurso.image_url,
                Titulo: recurso.title
            };   
        })
            setNewAnime( viejoAnime => {
                viejoAnime=
                {...viejoAnime, ...newAnime};
            })
        
        
       
       //[json.image_url, json.tittle]
    
    return (
        <div>
            {/* <img src={json.image_url} />
            <h2>{json.tittle}</h2> */}
            <h2>estoy en el landing</h2>
            // <Card anime={anime}/>
        </div>
    )
}

export default Landing
