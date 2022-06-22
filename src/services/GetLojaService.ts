import { getCustomRepository } from "typeorm";
import { LojaRepository } from "../repositories/LojaRepository";


class GetLojaService {
    async execute({ idLoja, estacionamentoId }) {
        const lojaRepository = getCustomRepository(LojaRepository);
        const loja = await lojaRepository.buscarLoja(idLoja, estacionamentoId);

        return loja;
    }
}

export { GetLojaService };