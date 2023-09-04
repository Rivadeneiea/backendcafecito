import express from "express";
console.log("esto es una prueba kakak");
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; //permite procesar variables de entorno
import productoRouter from "./src/routes/productos.routes.js";
import usuarioRouter from "./src/routes/usuario.routes.js";
import "./src/database/database.js";
// 1- configuraciones iniciales
const app = express();
// crear una variable
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("estoy en un puerto" + app.get("port"));
});
// middlewares : funciones se agregan antes de las rutas

app.use(cors()); //permite conexiones remotas
app.use(express.json()); //permite interpretar datos en formato json
app.use(express.urlencoded({ extended: true })); //ayuda a interpretar datos
//del body del request
app.use(morgan("dev")); //nos da mas informacion en la terminal
// crear rutas
//http://localjost:4000/api/producto
app.use("/api", productoRouter);
app.use("/api", usuarioRouter);
