//DATA TRANSFER OBJECT del usuario

class User {
    email: string;
    contrasenia: string;
    nombres: string;
    apellidos: string;
    direccion: string;

    constructor(
        email: string,
        contrasenia: string,
        nombres: string,
        apellidos: string,
        direccion: string,
    ){
        this.email = email;
        this.contrasenia = contrasenia;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;

    }
}

export default User;