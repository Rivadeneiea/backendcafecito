import Producto from "../models/producto.js";
// GET
export const listarProductos = async (req, res) => {
  try {
    // ir a pedir a la BD
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al listar productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  console.log(req.body);
  try {
    // ir a pedir a la BD

    const productoNuevo = new Producto(req.body);
    // guardar el producto nuevo en la BD
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "el producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "el producto no fue creado correctamente",
    });
  }
};

export const editarProducto = async (req, res) => {
  // extraer los parametrosde la ruta

  try {
    // ir a pedir a la BD
    // console.log(req.params.id);
    // console.log(req.body);
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    const productoNuevo = new Producto(req.body);
    // guardar el producto nuevo en la BD
    // await productoNuevo.save();
    res.status(200).json({
      mensaje: "elprocto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "no se puede editar el producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  // extraer los parametrosde la ruta

  try {
    // ir a pedir a la BD
    // console.log(req.params.id);
    // console.log(req.body);
    await Producto.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensaje: "elprocto fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "no se puede eliminar el producto",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  // extraer los parametrosde la ruta

  try {
    const productoBuscado = await Producto.findById(req.params.id);

    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "no se pudo obtener el producto",
    });
  }
};
