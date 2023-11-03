const {Pokemons, Type} = require("../db")
const defaultImage = "https://nintendo.pe/wp-content/uploads/2016/05/HddtBOT-copia.jpg"

const createPokemonController = async(
    id,
    name,
    image,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    type
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
            weight,
        })

      type.map(async(t)=>{
        const newTypes= await Type.findOne({where: {name: t}});
        await newPoke.addTypes(newTypes);
      });

        return (newPoke,`Creacion exitosa con id:${newPoke.id}` )
   
    }
}; 

module.exports = {
    createPokemonController
}