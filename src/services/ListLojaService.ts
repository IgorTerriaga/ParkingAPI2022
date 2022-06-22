import { getCustomRepository } from "typeorm";
import { EstacionamentoRepository } from "../repositories/EstacionamentoRepository";
import { LojaRepository } from "../repositories/LojaRepository";
import { PortaoRepository } from "../repositories/PortaoRepository";


class ListLojaService {


    async execute({ estacionamentoId }) {
        const lojaRepository = getCustomRepository(LojaRepository);
        const lojas = await lojaRepository.listarLojas(estacionamentoId);
        const portaoRepository = getCustomRepository(PortaoRepository);
        

        for (const iterator of lojas) {
            //delete iterator["portao_id"]
            iterator["proximo"]  = await (await portaoRepository.findOne(iterator.portao_id)).nome;

        
        }
        
        return lojas;
    }


}

export { ListLojaService };