class User {
    _email: string;
    _contrasenia: string;
    _nombres: string;
    _apellidos: string;
    _direccion: string;

    constructor(
        email: string,
        contrasenia: string,
        nombres: string,
        apellidos: string,
        direccion: string,
    ){
        this._email = email;
        this._contrasenia = contrasenia;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._direccion = direccion;

    }
}

export default User;