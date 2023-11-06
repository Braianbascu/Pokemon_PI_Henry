import { CREATE_POKEMON, GET_ID, GET_NAME, GET_POKEMONS, ORDER_ATAQUE, ORDER_A_Z, TYPES,  } from "../actions/action_types";

// estado inicial {}
let initialState = {
    pokemones:[],  // state original
    newPokes: [],  // state copia
    detailsPok:[],
    newTypes:[],
}

// todo lo que debe devolver si pasa cada caso
function rootReducer(state =initialState, action){
// todo el caso en cuanto a traer a los pokemones y su respuesta de modif al estado correspodmniente. los otros no los toco
    switch(action.type){
        case GET_POKEMONS:
            return {...state, newPokes: [action.payload], pokemones: [action.payload]};

        case GET_NAME:
            if(action.payload.hasOwnProperty ('name')){
                return {...state, newPokes: [action.payload], pokemones: [action.payload]}
            } else {
                return { ...state, newPokes: [...action.payload], pokemones: [...action.payload] }
            }

        case CREATE_POKEMON:
            return { ...state, newPokes: [...state.newPokes, action.payload], pokemones: [...state.pokemones, action.payload] }

        case GET_ID:
            return { ...state, detailsPoke: action.payload } // pensar a futuro el metodo de limpieza de Gama.

        case TYPES:
            return { ...state, newTypes: action.payload }


        case ORDER_A_Z:
            if (action.payload === 'todos') {
                const allCopy = state.newPokes;
                    return {
                         ...state,
                         pokemones:[...allCopy]
                     }
                   }
            if (action.payload === 'A') {
                const result = [...state.pokemones].sort((a, b) => a.name.localeCompare(b.name));
                    return {
                        ...state,
                        pokemones: result,
                     };
                   }
                   
            else if (action.payload === 'Z') {
                const result = [...state.pokemones].sort((a, b) => b.name.localeCompare(a.name));
                    return {
                       ...state,
                       pokemones: result,
                     };
                   } 
     
        case ORDER_ATAQUE:
            if (action.payload === 'ataqueMin') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => a.attack - (b.attack));
                    return {
                         ...state,
                         pokemones: [...result]
                     };
                 }
            if (action.payload === 'ataqueMax') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => b.attack - (a.attack));
                    return {
                         ...state,
                         pokemones: [...result]
                     }
                 }

        default:
            return state 
    }
}

export default rootReducer;