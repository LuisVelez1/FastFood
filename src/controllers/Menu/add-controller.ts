import { Request, Response } from "express";
import menuService from "../../services/Menu/menuService";
import Menu from "../../Dto/Menu/MenuDto";

let add = async (req: Request, res: Response) => {
    try {
        const{
            nombre,
            precio,
            descripcion
        } = req.body;

        const ADDM = await menuService.add(new Menu(nombre, precio, descripcion));
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

export default add;