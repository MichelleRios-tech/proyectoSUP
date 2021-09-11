import React, { useState, useEffect} from 'react'
import Card from './Card';
//const axios = require('axios')

function Landing() {
    
    const [anime, setAnime] = useState({});
     
    useEffect(() => {
        fetch('https://api.jikan.moe/v3/anime/1')
        .then (r => r.json())
        .then (recurso => {
            //console.log(recurso);
            if(recurso !== undefined){
                const anime = {
                    Imagen: recurso.image_url,
                    Titulo: recurso.title
                    }
                
            setAnime (anime);
                }
        else {
                alert("anime not found")
            }
        }
        )
        
    }, [])
        
            
    
        
       
       //[json.image_url, json.tittle]
       //console.log(anime);
    return (
        
        <div>
            {/* <img src={json.image_url} />
            <h2>{json.tittle}</h2> */}
            <h2>estoy en el landing</h2>
             <Card tittle={anime.Titulo} img_url={anime.Imagen}/>
        </div>
        
    )
}

export default Landing
