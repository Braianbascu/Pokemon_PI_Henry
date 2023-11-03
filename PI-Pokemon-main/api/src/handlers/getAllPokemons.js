const { allPokemonsController } = require("../controller/AllPokemonsController");
const {pokemonsByNameController} = require("../controller/pokemonByNameController");

const getAllPokemonsHandler = async(req, res)=>{
    const {name} = req.query;

    try {

        if(name){
            const pokemonByName = await pokemonsByNameController(name);
            return res.status(200).json(pokemonByName)
        }

        const allPokemons = await allPokemonsController()
           return res.status(200).json(allPokemons);
    } catch (error) {
        res.status(400).json(error.message)
    }

   
};

// usar el filtro por nombre y colocar condicional if. en caso de no todos los pokemones. 
// definir la fuente a buscar, puede ser con el ternario y definiendo la fuente 20.
// traer axios 
// usar template sting por el valor dinamico del id . ahi entra la busqueda de ese id
// con Find busco en base de datos 33.14

module.exports = {
    getAllPokemonsHandler
}