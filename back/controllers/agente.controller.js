const Agente = require("../models/agente");
const agenteCtrl = {};
//dar de alta una transaccion
agenteCtrl.createAgente = async (req, res) => {
  var agente = new Agente(req.body);
  try {
    await agente.save();
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
//mostrar todas las transacciones
agenteCtrl.getAgentes = async (req, res) => {
  var agentes = await Agente.find();
  res.json(agentes);
};

//mostrar por email
agenteCtrl.getAgenteEmail = async (req, res) => {
  const { email } = req.query; //parametro para obtener el email ingresado
  try {
    const agente = await Agente.find({ emailCliente: email }); //busca en emailCliente el cliente introducido
    //console.log("estoy en email");
    res.json(agente);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};


//Filtrar por params segun el tipo de divisa
agenteCtrl.getAgente = async (req, res) => {
  const { origen } = req.query;
  const { destino } = req.query;
  try {
    const agente = await Agente.find({
      monedaOrigen: origen,
      monedaDestino: destino,
    });
    //console.log("estoy en divisas");
    res.json(agente);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
module.exports = agenteCtrl;
