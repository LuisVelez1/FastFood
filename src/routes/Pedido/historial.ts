import express from 'express';
import historialPedidoController from '../../controllers/Pedido/historialPedido-controller';
import VALIDATETOKEN from '../../middleware/validateToken';

const ROUTER = express.Router();

ROUTER.get('/', VALIDATETOKEN, historialPedidoController);

export default ROUTER;