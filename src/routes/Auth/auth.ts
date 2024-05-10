import express from 'express';
import authController from '../../controllers/Auth/auth-controller';
const ROUTER = express.Router()

ROUTER.post('/', authController);

export default ROUTER;
