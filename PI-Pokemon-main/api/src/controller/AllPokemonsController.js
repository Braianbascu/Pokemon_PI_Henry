const { getPokemonsByApi } = require("./getPokemonsByApi");
const {getPokemonsByDb} = require("./getPokemonsByDb");


const allPokemonsController = async()=> {

    const allPokemonsByDb = await getPokemonsByDb();

    const allPokemonsByApi = await getPokemonsByApi();

    const allPokemons = [...allPokemonsByDb, ...allPokemonsByApi];

    return allPokemons;
}


// find all trae todos los de una tabla 
// modificar usuario en created true 1.03.00 // airve para filtrar los creados de api de los de db


module.exports = {
    allPokemonsController
}