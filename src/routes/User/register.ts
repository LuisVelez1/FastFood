import express from 'express';
import registrerController from '../../controllers/User/register-controller';
const ROUTER = express.Router();

ROUTER.post('/', registrerController);

export default ROUTER;