const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleados.controller"); // llama  a empleados controller

router.post("/", empleadosController.create); // Metodo de envio de datos

module.exports = router;
