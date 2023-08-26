import express from "express";
const router = express.Router();

const {container} = require('../container')
const usuariosController = container.resolve('usuariosController')

router.get("/", usuariosController.getAll);

export default router;
