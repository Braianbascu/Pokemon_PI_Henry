const {Pokemons, Type} = require("../db");
const axios = require("axios");

const allPokemonsController = async () => {
    const pokemonDb = await Pokemons.findAll({ include: [ { model: Type }] });
    
    const newPokemon = pokemonDb.map((pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            health: pokemon.health,
            attack: pokemon.attack,
            defense: pokemon.defense,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.Types.map(type => type.name).join(', ')
        }
    });

    const respose = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    const pokeResult = respose.data.results;
    const promises = pokeResult.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const apiInfo = pokemonResponse.data;
        const Poke = {
            id: apiInfo.id,
            name: apiInfo.name,
            image: apiInfo.sprites.front_default,
            health: apiInfo.stats[0]["base_stat"],
            attack: apiInfo.stats[1]["base_stat"],
            defense: apiInfo.stats[2]["base_stat"],
            height: apiInfo.height,
            weight: apiInfo.weight,
            type: apiInfo.types.map(type => type.type.name).join(', ')
        }
        return Poke

    });
    const pokeData = await Promise.all(promises);

    const combinedData = newPokemon.concat(pokeData);
    return combinedData;
}


// find all trae todos los de una tabla 
// modificar usuario en created true 1.03.00 // airve para filtrar los creados de api de los de db


module.exports = {
    allPokemonsController
}