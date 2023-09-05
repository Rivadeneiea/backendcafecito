import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
    maxLength: 16,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
    maxLength: 16,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
    maxLength: 16,
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);
export default Usuario;
