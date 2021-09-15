import React, { useState, useEffect} from 'react'
import Card from './Card'
import { getAnime } from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";



function Landing() {
    const anime = useSelector(state => state.anime)
    const dispatch = useDispatch()
     
    useEffect(() => {
       dispatch(getAnime());
        
    }, [dispatch])
        
            
    
        
       
       //[json.image_url, json.tittle]
       console.log(anime);
    return (

        <div>
            {/* <img src={json.image_url} />
            <h2>{json.tittle}</h2> */}
            <h2>estoy en el landing</h2>
             {anime && <Card anime= {anime}/> }
        </div>
        
    )
}

export default Landing
