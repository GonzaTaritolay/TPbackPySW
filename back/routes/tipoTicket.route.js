//defino controlador para el manejo de CRUD
const tipoCtrl = require("./../controllers/tipoTicket.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//dar de alta una transaccion 
router.get("/", tipoCtrl.getTicket);
router.post("/", tipoCtrl.createTipo);


module.exports = router;