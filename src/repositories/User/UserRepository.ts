import Auth from "../../Dto/AuthDto";
import User from "../../Dto/UserDto";
import DB from "../../config/config-db";
import bcrypt from "bcryptjs";

//Creacion de la clase UserRepositorio donde se realizan las consultas a la base de datos sobre la tabla usuarios
class UserRepository{

    //Este metodo se encarga de agregar un usuario a la base de datos llenando un DTO con los datos del usuario, exceptuando el id
    static async add(user: User){
        const SQL = 
        "INSERT INTO users (email, contrasenia, nombres, apellidos, direccion) VALUES (?, ?, ?, ?, ?)";
        const VALUES = [
            user.email,
            user.contrasenia,
            user.nombres,
            user.apellidos,
            user.direccion,
        ];
        return DB.execute(SQL, VALUES);
    }
    //Este metodo se encarga de la autenticación del usuario registrado, llenando un DTO en donde esta el email y la contraseña, tomando como referencia el id, contrasenia del email a consultar
    static async login(auth: Auth) {
        const SQL = "SELECT idU, contrasenia FROM users WHERE email=?";
        const VALUES = [auth.email];
        const RESULT: any = await DB.execute(SQL, VALUES);
        
        if (RESULT[0].length > 0) {
          const USER = RESULT[0][0];
          console.log(USER);
          
          const ISPASSWORDVALID = await bcrypt.compare(
            auth.contrasenia,
            USER.contrasenia
          );
          if (ISPASSWORDVALID) {
            return {
              userId: USER.idU,
              logged: true,
              status: "Successful authentication",
            };
          }
          return { logged: false, status: "Invalid username or passwor" };
        }
        return { logged: false, status: "Invalid username or password" };
      }

      static async getNameById(idUsuario: number){
        const SQL = "SELECT nombres FROM users WHERE idU = ?"
        const VALUES = [idUsuario];
        const [rows] : any = await DB.execute(SQL, VALUES);
            if (rows.length > 0) {
                return rows[0].nombres;
            }
      }
}
export default UserRepository;