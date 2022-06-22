import { getCustomRepository } from "typeorm";
import { LojaRepository } from "../repositories/LojaRepository";
import { PortaoRepository } from "../repositories/PortaoRepository";


class CreateLojaService {
    async execute({ nome, categoria, portao_id }) {
        const lojaRepository = getCustomRepository(LojaRepository);
        const portaoRepository = getCustomRepository(PortaoRepository);

        if (!nome) {
            throw new Error("Nome é obrigatório");
        }

        const loja_exist = await lojaRepository.findOne({ nome });
        if (loja_exist) {
            throw new Error("loja já existe");
        }

        const portao = await portaoRepository.findOne({ id: portao_id });

        if (!portao) {
            throw new Error("Portão não existe");
        }

        const loja = lojaRepository.create({ nome, categoria, portao_id, portao });
        await lojaRepository.save(loja);
        return loja;

    }
}

export { CreateLojaService };