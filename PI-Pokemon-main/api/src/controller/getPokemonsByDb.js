const {Pokemons, Type} =require ("../db");

const getPokemonsByDb = async ()=>{
    const pokemonsDb = await Pokemons.findAll({
        incluide:{
            model: Type,
            attributes: ["name"],
            through:{
                types:[],
            }
        }
    });
    return pokemonsDb.map((pokemon)=>{
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            health: pokemon.health,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types:pokemon.types.map((type) => type.name),
        }
    });
}


module.exports={
    getPokemonsByDb
}