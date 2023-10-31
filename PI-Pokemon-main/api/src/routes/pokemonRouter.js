const { Router } = require("express");
const pokemonRouter = Router();
const {getAllPokemonsHandler} = require("../handlers/getAllPokemons")
const {getPokemonByIdHandler} = require("../handlers/getPokemonById")
const {postCreatePokemonHandler}= require("../handlers/postCreatePokemon")

//RUTAS
pokemonRouter.get("/", getAllPokemonsHandler); 

pokemonRouter.get("/:id", getPokemonByIdHandler);   

pokemonRouter.post("/",postCreatePokemonHandler);
    


module.exports = pokemonRouter;