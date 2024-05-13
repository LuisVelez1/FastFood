import { Request, Response } from "express";
import pedidoService from "../../services/Pedido/PedidoService";
import UserRepository from "../../repositories/User/UserRepository";

let pedido = async (req: Request, res: Response ) => {
    try {

        const idUsuario = req.body.id;

        if(!idUsuario){
            return res.status(401).json({status: 'Acceso denegado'});
        }

        const { idMenu, direccionEntrega } = req.body;

        const nombreUsuario = await UserRepository.getNameById(idUsuario);
       

        const pedidoData = {
            idUsuario: idUsuario,
            idMenuu: idMenu,
            direccionEntrega: direccionEntrega,
            nombreUsuario: nombreUsuario,
        };
                
        await pedidoService.create(pedidoData);

        return res.status(201).json({ status: 'Pedido realizado exitosamente' });

        
    } catch (error) {
        
    }
    

}






export default pedido;