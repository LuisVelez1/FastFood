import mysql from 'mysql2';
import dotenv from 'dotenv';

//Configuracion de las varibles de entorno
dotenv.config();

//Funcion que crea la conección a la base de datos
const DB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0
});

//Validaciión de la conexión a la base de datos
DB.getConnection((err, connection) =>{
    if(err){
      console.log("Error al conectar a la base de datos", err);
      if(connection){
      connection.release;
    }
    return;
  }
  console.log("conexion exitosa a la base de datos");

  });

export default DB.promise();