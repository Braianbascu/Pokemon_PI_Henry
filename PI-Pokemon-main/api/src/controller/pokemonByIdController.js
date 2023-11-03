const {Pokemons, Type} = require("../db");
const axios = require("axios");

const pokemonByIdController = async (id, source) =>{

    if(source === "api"){
        const pokemonByApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); // solicitud a la API

        if(pokemonByApi.data){
            const pokemonApi = pokemonByApi.data;    // declaro la constante con toda la informacion

            const pokemonApiData = {    // en esta nueva constante filtro solo la info que necesito 
                id:id,
                name:pokemonApi.name,
                image: pokemonApi.sprites.other["official-artwork"].front_default, //  intento acceder a la imagen de arte oficial frontal del Pokémon.
                health: pokemonApi.stats[0].base_stat, // en el array de stats accedo por su orden y tomo el valor base de esta prop
                attack: pokemonApi.stats[1].base_stat,
                defense: pokemonApi.stats[2].base_stat,
                speed: pokemonApi.stats[5].base_stat,
                height: pokemonApi.height,
                weight: pokemonApi.weight,
                types: pokemonApi.types.map((elem) => elem.type.name), // recorro el array de typos y formo uno nuevo donde cada elem es un types
            };
            return pokemonApiData;
        }
    }

    const pokemonByDb = await Pokemons.findOne({      // busco mediante el id el pokemon en la base, a su vez incluyo el modelo types para traer la info tambien 
        where: {id:id},   // condicion de busqueda 
        include:{       // incluido el modelo 
            model:Type,  
            attributes: ["name"],     // estos atributos se suman 
            througth: {
                type:[],
            }
        }
    });

    if(pokemonByDb){
        const pokeomDbData= {
            id: pokemonByDb.id,
            name: pokemonByDb.name,
            image: pokemonByDb.image,
            health: pokemonByDb.health,
            attack: pokemonByDb.attack,
            defense: pokemonByDb.defense,
            speed: pokemonByDb.speed,
            height: pokemonByDb.height,
            weight: pokemonByDb.weight,
        }
        return pokeomDbData;
    }

    return "No se encontro el Pokemon"

}




module.exports = {
    pokemonByIdController
}