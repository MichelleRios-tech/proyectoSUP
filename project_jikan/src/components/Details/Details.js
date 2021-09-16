import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAnime, clean } from '../redux/actions';
import { useParams } from 'react-router-dom'

function DetailAnime() {
    const anime = useSelector(state => state.anime);
    const dispatch = useDispatch();
    let { animeID} = useParams();

    

    console.log(animeID);
    useEffect(() => {

        animeID && dispatch(getAnime(animeID));
        return dispatch(clean())

    }, [dispatch, animeID])

    const bgIMG = anime?.image_url;
    const title = anime?.title;
    return (
        <div>
            {bgIMG && anime !== 'not_found' ?
                <>
                    <h2>{title}</h2>
                    <img className='animeIMG' src={bgIMG} alt='portada' />
                    <p>{anime.synopsis}</p>
                </>
                : anime === 'not_found' ? 
                <h1>anime not found</h1>
                : <div><img src='https://acegif.com/wp-content/uploads/loading-6.gif' alt='cargando' /></div>
                }
        </div>


    )
}

export default DetailAnime
