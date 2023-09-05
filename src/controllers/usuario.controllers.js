import Usuario from "../models/usuario.js";

export const login = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al listar usuarios",
    });
  }
};

export const crearUsuario = async (req, res) => {
  console.log(req.body);
  try {
    // ir a pedir a la BD

    const usuarioNuevo = new Usuario(req.body);
    // guardar el producto nuevo en la BD
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "el usuario fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "el usuario no fue creado correctamente",
    });
  }
};
