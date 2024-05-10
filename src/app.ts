import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import register from './routes/User/register';

dotenv.config()

const app = express().use(bodyParser.json());

//User
app.use('/register', register);

const PORT = process.env.PORT || 10102;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

