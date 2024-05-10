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
            user._email,
            user._contrasenia,
            user._nombres,
            user._apellidos,
            user._direccion,
        ];
        return DB.execute(SQL, VALUES);
    }

    //Este metodo se encarga de la autenticación del usuario registrado, llenando un DTO en donde esta el email y la contraseña, tomando como referencia el id, contrasenia del email a consultar
    static async login(auth: Auth){
        const SQL = 'SELECT id_U, contrasenia FROM users WHERE email = ?';
        const VALUES = [auth.email];
        const RESULT: any = await DB.execute(SQL, VALUES);

        //Este ciclo entra si hay al menos un dato, y luego se comparan las contraseñas retornando si es la correcta o no.
        if(RESULT[0].length > 0){
            const USER = RESULT[0][0];
            const ISPASSWORDVALID = await bcrypt.compare(
                auth.email,
                auth.contrasenia
            );
            if(ISPASSWORDVALID){
                return {
                    UserId: USER.id_U,
                    logged: true,
                    status: 'Autenticacion exitosa',
                };
            }
            return { logged: false, status: 'Correo o contraseña invalidos' }
        }
        return { logged: false, status: 'Correo o contraseña invalidos'}
    }
}

export default UserRepository;