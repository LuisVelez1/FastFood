import Pedido from "../../Dto/Pedido/pedidoDto";
import DB from '../../config/config-db';

class PedidoRepository {
    static async create(pedido: Pedido){
        try {
            const SQL = "INSERT INTO pedidos (idUsuario, idMenuu, direccionEntrega, nombreUsuario) VALUES (?, ?, ?, ?)";            
            const values = [pedido.idUsuario, pedido.idMenuu, pedido.direccionEntrega, pedido.nombreUsuario];
            return DB.execute(SQL, values);
        } catch (error) {
            throw new Error("Error al crear el pedido en la base de datos");
        }
    }

    static async historial(idUsuario: number){
        try {
            const SQL = 'SELECT * FROM pedidos WHERE idUsuario = ?'
            const VALUES = [idUsuario];
            const [RESULT] = await DB.execute(SQL, VALUES);
            return RESULT;
            
        } catch (error) {
            throw new Error('Error al buscar el historial de pedidos')
        }
    }
}

export default PedidoRepository;
