import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import register from './routes/User/register';
import auth from './routes/Auth/auth';
import add from './routes/Menu/add';
import createPedido from './routes/Pedido/pedido';
import historialPedido from './routes/Pedido/historial';

dotenv.config()

const app = express().use(bodyParser.json());

//User
app.use('/register', register);
app.use('/auth', auth);

//Menu
app.use('/menu/add', add);

//Pedido
app.use('/pedido', createPedido);
app.use('/pedido/historial', historialPedido);


const PORT = process.env.PORT || 10102;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

