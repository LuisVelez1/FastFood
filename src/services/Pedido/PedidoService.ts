import Pedido from "../../Dto/Pedido/pedidoDto";
import PedidoRepository from "../../repositories/Pedido/pedidoRepository";

class pedidoService{
    static async create(pedido: Pedido){
        return await PedidoRepository.create(pedido);
    }

    static async historial(idUsuario: number){
        return await PedidoRepository.historial(idUsuario);
    }
}

export default pedidoService;