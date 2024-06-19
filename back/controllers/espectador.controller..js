const Espectador = require("../models/espectador");
const espectadorCtrl = {};
//dar de alta un espectador
espectadorCtrl.createEspectador = async (req, res) => {
  var espectador = new Espectador(req.body);
  try {
    await espectador.save();
    res.json({
      status: "1",
      msg: "Espectador guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

//obtener todo los espectadores
espectadorCtrl.getEspectadores = async (req, res) => {
  var espectador = await Espectador.find();
  res.json(espectador);
};

//obtener un espectador
espectadorCtrl.getEspectador = async (req, res) => {
  const { Dni } = req.query;
  try {
    var espectador = await Espectador.find({ dni: Dni });
    res.json(espectador);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = espectadorCtrl;
