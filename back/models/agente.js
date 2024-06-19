const mongoose = require("mongoose");
const { Schema } = mongoose;
const AgenteSchema = new Schema({
  monedaOrigen: { type: String, required: true },
  cantidadOrigen: { type: Number, required: true },
  monedaDestino: { type: String, required: true },
  cantidadDestino: { type: Number, required: true },
  emailCliente: { type: String, required: true },
  tasaConversion:{ type:Number, required: true}
});
module.exports =
  mongoose.models.Agente || mongoose.model("Agente", AgenteSchema);
