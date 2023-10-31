const { Router } = require("express");
const {getAllTypesHandler } = require("../handlers/getAllTypes");
const typeRouter = Router();

//RUTAS

typeRouter.get("/", getAllTypesHandler );



module.exports = typeRouter;