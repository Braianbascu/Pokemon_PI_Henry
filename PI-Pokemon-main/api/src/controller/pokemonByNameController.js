const axios = require('axios');
const { Op } = require ('sequelize')
const { Pokemons, Type} = require('../db');


const pokemonsByNameController = async (name) => {
    const pokemonDb = await Pokemons.findAll({ where: { name:{[Op.iLike]: `%${name}%`} }, include: [Type] });
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
      })
    
    if(newPokemon.length > 0) {
        return newPokemon
    } 
    
    const pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = pokeapi.data;
    const pokemonFund = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        health: pokemon.stats[0]["base_stat"],
        attack: pokemon.stats[1]["base_stat"],
        defense: pokemon.stats[2]["base_stat"],
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(type => type.type.name).join(', ')
    }
    
    return pokemonFund;
}

module.exports= {
    pokemonsByNameController
}