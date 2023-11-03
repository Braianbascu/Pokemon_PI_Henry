const {Type} = require("../db");
const axios = require ("axios");

// usar el bulk create para los type en primer momento asi despues utilizo la base de datos con los find.

const getTypeController = async ()=>{
    let types = await Type.findAll({attributes:["id", "name"]});
    if (!types.length){
        const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
        types = getTypes.data.results;

        for(const type of types){
            const url = await axios.get(type.url);
            delete type.url;
            type.id = url.data.id;
        }
        await Type.bulkCreate(types);
    }
    return types;
}




module.exports= {
   getTypeController
}