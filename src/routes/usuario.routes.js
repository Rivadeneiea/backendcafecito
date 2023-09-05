import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuario.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route("/usuario").get(login).post(crearUsuario);
export default usuarioRouter;
