const mongoose = require("mongoose");
//const URI = "mongodb://localhost/proyectodb";  //Para la notebook
const URI = "mongodb://127.0.0.1/proyectodb";   //Para la pc
mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
module.exports = mongoose;
