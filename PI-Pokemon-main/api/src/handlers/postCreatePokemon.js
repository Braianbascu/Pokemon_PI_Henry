const {createPokemonController} = require("../controller/createPokemonController")

// solicitud por body de los datos
const postCreatePokemonHandler =  async (req, res)=>{
    const {
        id,
        name,
        image,
        health,
        attack,
        defense,
        speed,
        height,
        weigth,
        types,
    } =req.body;
// creacion de pokemon con datos y su resspuesta de forma exitosa
    try {
        const newPokemon = await createPokemonController(  // invoca a la fun de controlador
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
        );
        res.status(201).json({
            message: "El Pokemon se creo de forma exitosa",
            pokemon: newPokemon,
        }) // error en el caso de no crearlo correctamente 
    } catch (error) {
        res.status(400).json(error.message)  // el error que manda la consola
    }
    };

    
    module.exports = {
        postCreatePokemonHandler
    }