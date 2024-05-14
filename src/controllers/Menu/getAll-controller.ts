import { Request, Response } from "express";
import menuService from "../../services/Menu/menuService";

let getAll = async (req: Request, res: Response) => {
    try {
         const MENUES = await menuService.getAll();
         return res.status(200).json(MENUES);
        
    } catch (error) {
        return res.status(501).json({
           status: 'Error interno'
        })
    }
}

export default getAll;