import express from 'express';
import getController from '../../controllers/Menu/getAll-controller';

const ROUTER = express.Router();

ROUTER.get('/', getController);

export default ROUTER;