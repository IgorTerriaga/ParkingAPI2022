import { getCustomRepository } from "typeorm";
import { PortaoRepository } from "../repositories/PortaoRepository";

class GetPortaoService {
    async execute({ id }) {
        const portaoRepository = getCustomRepository(PortaoRepository);
        const portao = await portaoRepository.findOne({ id });
        return portao;
    }
}


export { GetPortaoService };