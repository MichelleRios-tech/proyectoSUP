import {
    GET_ANIME,
    GET_AIRING,
    CLEAN,
    PAGE_NOT_FOUND
} from "./actions";

const initialState = {
    anime: [],
    airingAnimes: []
}
export const animeReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_ANIME:
            return {
                ...state,
                anime: action.payload
            }
        case CLEAN:
            return {
                ...state,
                anime: {}
            }
        case GET_AIRING:
            return {
                ...state,
                airingAnimes: action.payload
            }
        case PAGE_NOT_FOUND:
            return {
                ...state,
                anime: 'not_found'
            }
        default:
            return state;
    }
};