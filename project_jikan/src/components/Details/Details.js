import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAnime, clean } from '../redux/actions';
import { useParams } from 'react-router-dom';
import './Details.css'
function DetailAnime() {
    const anime = useSelector(state => state.anime);
    const dispatch = useDispatch();
    let { animeID} = useParams();

    

    console.log(animeID);
    useEffect(() => {

        setTimeout(() => {
            animeID && dispatch(getAnime(animeID));
          }, 1000);
        
        return dispatch(clean())

    }, [dispatch, animeID])

    const bgIMG = anime?.image_url;
    const title = anime?.title;
    return (
        <div>
            {bgIMG && anime !== 'not_found' ?
                <div className='detailsBox'>
                    <h2>{title}</h2>
                    <img className='animeIMG' src={bgIMG} alt='portada' />
                    <p>{anime.synopsis}</p>
                </div>
                
                : anime === 'not_found' ? 
                <h1>anime not found</h1>
                : <div className='imgloading' >loading...</div>
                }
        </div>


    )
}

export default DetailAnime
