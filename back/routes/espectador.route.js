//defino controlador para el manejo de CRUD
const EspectadorCtrl = require("./../controllers/espectador.controller.");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//dar de alta un espectador
router.post("/", EspectadorCtrl.createEspectador);
//mostrar todas los espectadores
router.get("/", EspectadorCtrl.getEspectadores);
//mostrar por dni
router.get("/by", EspectadorCtrl.getEspectador);

//cambioss

//exportamos el modulo de rutas
module.exports = router;
