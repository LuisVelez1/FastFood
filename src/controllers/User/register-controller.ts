import { Request, Response } from "express";
import UserService from "../../services/User/userService";
import User from "../../Dto/UserDto";

let register = async (req: Request, res: Response) => {
    try {
        const{
            email,
            contrasenia,
            nombres,
            apellidos,
            direccion
        } = req.body
        const REGISTERU = await UserService.register(new User(email, contrasenia, nombres, apellidos, direccion));
        return res.status(201).send(
            { status: "registro exitoso"}
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).send({ errorInfo: error.sqlMessage }
            );
          }
    }
}

export default register;