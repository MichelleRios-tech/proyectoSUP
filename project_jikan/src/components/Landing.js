import React, { useEffect } from 'react'
import Card from './Card/Card';
import { getAiring } from './redux/actions';
import { useDispatch, useSelector } from "react-redux";
import './Landing.css'
//const axios = require('axios')

function Landing() {
    const airingAnimes = useSelector(state => state.airingAnimes)
    //const anime = useSelector(state => state.anime)
     const dispatch = useDispatch();

    // const [anime, setAnime] = useState({});

    // useEffect(() => {
    //     fetch('https://api.jikan.moe/v3/anime/1')
    //     .then (r => r.json())
    //     .then (recurso => {
    //         //console.log(recurso);
    //         if(recurso !== undefined){
    //             const anime = {
    //                 Imagen: recurso.image_url,
    //                 Titulo: recurso.title
    //                 }

    //         setAnime (anime);
    //             }
    //     else {
    //             alert("anime not found")
    //         }
    //     }
    //     )

    // }, [])

useEffect(() => {
    !!airingAnimes && dispatch(getAiring())
}, [dispatch,airingAnimes])



    //[json.image_url, json.tittle]
    console.log(airingAnimes);
    return (
        <div className='hex-grid__list'>
        {airingAnimes?.map( e =>
            <Card anime={e} key={e.mal_id}/>

            )}</div>
    )
}

export default Landing
