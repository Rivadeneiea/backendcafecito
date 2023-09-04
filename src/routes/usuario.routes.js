import { Router } from "express";
import { login } from "../controllers/usuario.controllers.js";

const usuarioRouter = Router();

usuarioRouter.route("/usuario").get(login);
export default usuarioRouter;
