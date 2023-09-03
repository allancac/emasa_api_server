import {Router} from 'express';
const routes = new Router();

const {container} = require('../container')
const usuariosController = container.resolve('usuariosController')

routes.get("/", usuariosController.getAll);

export default routes;
