import { GET_ANIME } from "./actions";
const state={
    anime:[]
}
export const animeReducer = function (state = 0, action) {
    switch (action.type) {
        case GET_ANIME:
            return {
                ...state,
                anime: action.payload
            }
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};