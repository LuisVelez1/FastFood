import { Request, Response } from "express";
import UserService from "../../services/User/userService";
import generateToken from "../../helpers/generateToken";
import Auth from "../../Dto/AuthDto";
import dotenv from "dotenv";
dotenv.config();

//Funcion que sirve para la correcta autenticación del usuario registrado
let auth = async (req: Request, res: Response) => { 
    try {
        const { email, contrasenia } = req.body;
        const LOGIN =  await UserService.login(new Auth(email, contrasenia));
        console.log(LOGIN);
        
        if(LOGIN.logged){
            const USERID = LOGIN.userId;
            const TOKEN = generateToken({ idU: USERID } , process.env.SECRET_SIGNATURE, 10);
            return res.status(200).json({
                status: LOGIN.status,
                token: TOKEN
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'Internal Server Error'
        });
    }
}

export default auth;