const Producto = require("../models/producto");
const productoCtrl = {};
productoCtrl.getProductos = async (req, res) => {
  var productos = await Producto.find();
  res.json(productos);
};
productoCtrl.createProducto = async (req, res) => {
  var productos = new Producto(req.body);
  try {
    await productos.save();
    res.json({
      status: "1",
      msg: "Producto guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
productoCtrl.getProducto = async (req, res) => {
  //const {destacado} = req.query;
  const productos = await Producto.find({destacado: true});
  res.json(productos);
};
productoCtrl.editProducto = async (req, res) => {
  const vproductos = new Producto(req.body);
  try {
    await Producto.updateOne({ _id: req.body._id }, vproductos);
    res.json({
      status: "1",
      msg: "Product updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
productoCtrl.deleteProducto = async (req, res) => {
  try {
    await Producto.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Product removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
module.exports = productoCtrl;
