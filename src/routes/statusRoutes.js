import express from 'express';
const router = express.Router();
import statusController from '../controllers/StatusController'

router.get('/', statusController.index);

export default router;
