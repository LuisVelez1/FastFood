class Pedido{
    idUsuario: number
    idMenuu: number;
    direccionEntrega: string;
    nombreUsuario: any
    constructor(
        idUsuario: number,
        idMenuu: number,
        direccionEntrega: string,
        nombreUsuario: any,
    ){
        this.idUsuario = idUsuario;
        this.idMenuu = idMenuu;
        this.direccionEntrega = direccionEntrega;
        this.nombreUsuario = nombreUsuario;
    }
}

export default Pedido;