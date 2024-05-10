import User from "../../Dto/UserDto";
import generateHash from "../../helpers/generateHash";
import UserRepository from "../../repositories/User/userRepository";

class UserService {
    //Este metodo se encarga del registro de los usuarios
    static async register(user: User){  
        user._contrasenia = await generateHash(user._contrasenia);
        return await UserRepository.add(user);
    }
    //Este metodo se encarga de la autenticación de los usuarios
    static async login(auth: Auth){
        return await UserRepository.login(auth);
    }
}

export default UserService;