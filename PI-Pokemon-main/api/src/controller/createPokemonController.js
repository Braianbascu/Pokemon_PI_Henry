const {Pokemons, Type} = require("../db")
const defaultImage = "https://nintendo.pe/wp-content/uploads/2016/05/HddtBOT-copia.jpg"

let createPokemonController = async(
    id,
    name,
    image,
    health,
    attack,
    defense,
    speed,
    height,
    weigth,
    types
) =>{
    const checkPokemon = await Pokemons.findOne({where: {name: name} });
    if (checkPokemon){
        throw new Error ("Este Pokemon ya fue creado");
    } else {
        const newPoke = await Pokemons.create({
            id,
            name,
            image: image ? image : defaultImage,
            health,
            attack,
            defense,
            speed,
            height,
            weigth,
            types,
        });

        const typeInDb =  await Type.findAll ({
            where: {
                name: types,
            },
        });
        newPoke.addType(typeInDb);
        tipo= typeInDb.map((elem)=> elem.name);

        return `Creacion exitosa con id:${newPoke.id} y de type:${tipo}`
    }
}; 

module.exports = {
    createPokemonController
}