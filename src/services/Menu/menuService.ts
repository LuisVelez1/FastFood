import Menu from "../../Dto/Menu/MenuDto";
import MenuRepository from "../../repositories/Menu/MenuRepository";

class menuService{
    static async add(menu:Menu){
        return await MenuRepository.add(menu);
    }
}

export default menuService;