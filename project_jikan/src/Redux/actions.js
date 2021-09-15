import { endpoints } from "../variables"
import axios from 'axios'
export const GET_ANIME = "GET_ANIME"





export function getAnime(){
    return function(dispatch){
         axios.get(endpoints.getAnime)
        .then(response=>{
           return dispatch({type:GET_ANIME, payload: response.data})
        })
    }
}