const { Router } = require('express');
const router = Router();
const pokemonRouter = require("./pokemonRouter");
const typeRouter = require("./typeRouter");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pokemonRouter)
router.use("/types", typeRouter)

module.exports = router;
