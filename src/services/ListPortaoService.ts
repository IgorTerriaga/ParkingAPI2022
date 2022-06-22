import { getCustomRepository } from "typeorm";
import { PortaoRepository } from "../repositories/PortaoRepository";

class ListPortaoService {

    async execute() {
        const portaoRepository = getCustomRepository(PortaoRepository);
        const portao = await portaoRepository.find();

        return portao;
    }
}


export { ListPortaoService };