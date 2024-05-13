import express from 'express';
import addController from '../../controllers/Menu/add-controller';

const ROUTER = express.Router();

ROUTER.post('/', addController);

export default ROUTER;