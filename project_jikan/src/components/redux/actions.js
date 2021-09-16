import { endpoints } from '../../variables'
import axios from 'axios'
export const GET_ANIME = "GET_ANIME"
export const GET_AIRING = "GET_AIRING"
export const CLEAN = 'CLEAN'
export const PAGE_NOT_FOUND = 'PAGE_NOT_FOUND'



export function getAnime(id){
    return function(dispatch){
         axios.get(endpoints.getAnime+id)
        .then(response=>{
            console.log("get anime");
           return dispatch({type:GET_ANIME, payload: response.data})
        })
        .catch(error => dispatch({type: PAGE_NOT_FOUND, payload: error})
        )
    }
}
export function getAiring(){
    return function(dispatch){
         axios.get(endpoints.getAiring)
        .then(response=>{
            console.log('airing animes');
           return dispatch({type:GET_AIRING, payload: response.data.top})
        })
    }
}

export function clean(){
    return function (dispatch) {dispatch({type:CLEAN, payload: {}});}
}