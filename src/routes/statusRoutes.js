import {Router} from 'express';
const routes = new Router();
import statusController from '../controllers/StatusController'

routes.get('/', statusController.index);

export default routes;
