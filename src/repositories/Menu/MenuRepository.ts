import Menu from "../../Dto/Menu/MenuDto";
import DB from "../../config/config-db";

class MenuRepository{
    static async add(menu: Menu){
        const SQL = "INSERT INTO menu (nombre, precio, descripcion) VALUES (?,?,?)";
        const VALUES = [menu.nombre, menu.precio,  menu.descripcion];
        return DB.execute(SQL, VALUES);
    }

    static async getAll(){
        const SQL = "SELECT idMenu, nombre, precio, descripcion FROM menu ";
        return DB.execute(SQL);
    }
}

export default MenuRepository;