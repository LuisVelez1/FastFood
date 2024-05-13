import express from 'express';
import pedidoController from '../../controllers/Pedido/pedido-controller';
import VALIDATETOKEN from '../../middleware/validateToken';

const ROUTER = express.Router();

ROUTER.post('/', VALIDATETOKEN, pedidoController);

export default ROUTER;