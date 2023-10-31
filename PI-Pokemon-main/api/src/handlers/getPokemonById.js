const {pokemonByIdController} = require("../controller/pokemonByIdController")

const getPokemonByIdHandler = async(req, res)=>{

    const {id}= req.params;

    const source = isNaN(id) ? "db" : "api"; // determino la fuente donde se debe hacer la busqueda 
    try {
        const pokemonById = await pokemonByIdController (id, source);      // mando al controlador los datos siendo el id y la determinacion de la fuente 
        if(pokemonById instanceof Error){               // si hay error lo capturo y lo mando para el manejo de errores 
            throw pokemonById;
        }
        res.status(200).json(pokemonById);      // devuelvo lo que obtengo 
    } catch (error) {
        res.status(400).json(error.message)
    }
   
    };

module.exports = {
    getPokemonByIdHandler
}