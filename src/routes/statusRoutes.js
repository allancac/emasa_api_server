import express from 'express';
const router = express.Router();
import statusController from '../controllers/StatusController'

router.get('/status', statusController.index);

export default router;
