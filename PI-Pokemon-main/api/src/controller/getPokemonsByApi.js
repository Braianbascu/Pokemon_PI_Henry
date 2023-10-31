 const axios = require ("axios")
 

 const getPokemonsByApi = async (url = `https://pokeapi.co/api/v2/pokemon`) => {
    // Realiza la solicitud GET a la URL proporcionada (o a la URL predeterminada de la API de Pokémon).
    const resultApi = await axios.get(url);
    
    // Obtiene la siguiente página de resultados de la API para obtener más Pokémon.
    const nextApi = await axios.get(resultApi.data.next);
    
    // Combina los resultados de la página actual con los de la siguiente página para obtener todos los Pokémon.
    const allPokemons = [...resultApi.data.results, ...nextApi.data.results];
  
    const pokemonsData = [];
  
    // Itera sobre cada Pokémon para obtener los detalles de cada uno.
    for (const pokemon of allPokemons) {
      // Realiza una solicitud GET a la URL de cada Pokémon para obtener sus detalles.
      const pokemonUrl = await axios.get(pokemon.url);
      
      // Obtiene el ID del Pokémon a partir de la URL.
      const id = pokemon.url.split("/").slice(-2, -1)[0];
  
      // Formatea los datos del Pokémon que se van a recolectar.
      const formattedPokemon = {
        id: id,
        name: pokemon.name,
        image: pokemonUrl.data.sprites.other["official-artwork"].front_default,
        health: pokemonUrl.data.stats[0].base_stat,
        attack: pokemonUrl.data.stats[1].base_stat,
        defense: pokemonUrl.data.stats[2].base_stat,
        speed: pokemonUrl.data.stats[5].base_stat,
        height: pokemonUrl.data.height,
        weight: pokemonUrl.data.weight,
        types: pokemonUrl.data.types.map((pkmtype) => pkmtype.type.name),
      };
  
      // Agrega los datos del Pokémon formateados al arreglo de datos de Pokémon.
      pokemonsData.push(formattedPokemon);
    }
  
    // Retorna los datos recolectados de los Pokémon.
    return pokemonsData;
  };



module.exports = {
    getPokemonsByApi
}