const {getTypeController} = require("../controller/typesController");


const getAllTypesHandler = async(req, res)=> {
    try {
        const types = await getTypeController()
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};



module.exports={
    getAllTypesHandler
}