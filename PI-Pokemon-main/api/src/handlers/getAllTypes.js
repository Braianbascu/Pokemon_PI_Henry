const getAllTypesHandler = (req, res)=> {
    res.status(200).send("todos los tipos");
};



module.exports={
    getAllTypesHandler
}