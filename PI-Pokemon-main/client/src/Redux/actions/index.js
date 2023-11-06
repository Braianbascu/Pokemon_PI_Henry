import axios from 'axios'
import { CREATE_POKEMON, GET_ID, GET_NAME, GET_POKEMONS, ORDER_ATAQUE, ORDER_A_Z, TYPES,  } from "./action_types";

// que hace cada action:

export const getPokemon = ()=> {
    return async (dispatch) =>{
        const response = await axios.get("http://localhost:3001/pokemon") // llamo al servidor creado para esta SPA
        dispatch({
            type: GET_POKEMONS,
            payload: response.data
        });
    }
}

export const getNamePokemon = (name) =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get(`http://localhost:3001/pokemon/?name${name}`)
            dispatch({
                type: GET_NAME,
                payload: response.data
            });
        } catch (error) {
            alert(`no se encontro ningun pokemon con el nombre "${name}"`)
        }
    }
}

export const getById = (id)=>{
    return async (dispatch) =>{
        const response = await axios.get(`http://localhost:3001/pokemon/${id}`)
        dispatch({
            type: GET_ID,
            payload: response.data
        });
    }
}

export const createPokemon = (data) =>{
    return async (dispatch) =>{
        try {
            const response = await axios.post(`http://localhost:3001/pokemon`)
            alert('Este Pokemon ya fue creado')
            dispatch ({
                type:CREATE_POKEMON,
                payload: response.data,
            });
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const allTypes = ()=> {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/types`) 
        dispatch({
            type: TYPES,
            payload: response.data
        });
    }
}

export const orderAz = (order) =>{
    return {
        type: ORDER_A_Z,
        payload: order
    }
}

export const orderAttack = (order) =>{
    return{
        type:ORDER_ATAQUE,
        payload: order
    }
}


