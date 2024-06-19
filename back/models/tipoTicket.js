const mongoose = require("mongoose");
const { Schema } = mongoose;
const TipoSchema = new Schema({
  tipo: { type: String, required: true },
  descripcion:{ type: String, required: true}
});
module.exports =
  mongoose.models.Tipo || mongoose.model("Tipo", TipoSchema);