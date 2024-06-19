const Tipo = require("../models/tipoTicket");
const tipoCtrl = {};
//dar de alta una transaccion
tipoCtrl.createTipo = async (req, res) => {
  var tipo = new Tipo(req.body);
  try {
    await tipo.save();
    res.json({
      status: "1",
      msg: "Agente guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
tipoCtrl.getTicket = async (req, res) => {
  var tipo = await Tipo.find();
  res.json(tipo);
};
module.exports = tipoCtrl;