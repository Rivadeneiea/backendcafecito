import express from "express";
console.log("esto es una prueba kakak");

// 1- configuraciones iniciales
const app = express();
// crear una variable
app.set("port", process.env.PORT || 4000);
// middlewares

// crear rutas
