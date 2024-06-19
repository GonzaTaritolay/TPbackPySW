//defino controlador para el manejo de CRUD
const agenteCtrl = require("./../controllers/agente.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//dar de alta una transaccion 
router.post("/", agenteCtrl.createAgente);
//mostrar todas las transacciones
router.get("/", agenteCtrl.getAgentes);
//mostrar por email
router.get("/transacciones", agenteCtrl.getAgenteEmail);
//mostrar por parametro de origen y destino
router.get("/divisas", agenteCtrl.getAgente);
//exportamos el modulo de rutas

module.exports = router;
