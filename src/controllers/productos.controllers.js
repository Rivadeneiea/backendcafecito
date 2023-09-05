import Producto from "../models/producto.js";

export const listarProductos = (req, res) => {
  try {
    // ir a pedir a la BD
    res.send("esto es una prueba");
  } catch (error) {}
};

export const crearProducto = async (req, res) => {
  console.log(req.body);
  try {
    // ir a pedir a la BD

    const productoNuevo = new Producto(req.body);
    // guardar el producto nuevo en la BD
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "elprocto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "el procto no fue creado correctamente",
    });
  }
};
