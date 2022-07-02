import { ADD_MOVIE } from "./actionTypes"


export const add_movie =(newMovie)=>{
    return{
        type:ADD_MOVIE,
        payload : newMovie,
    }
}