import { getCustomRepository } from "typeorm";
import { EstacionamentoRepository } from "../repositories/EstacionamentoRepository";
import { PortaoRepository } from "../repositories/PortaoRepository";

class CreatePortaoService {

    async execute({ nome, estacionamento_id }) {
        const portaoRepository = getCustomRepository(PortaoRepository);
        const estacionamentoRepository = getCustomRepository(EstacionamentoRepository);

        const portaoExist = await portaoRepository.findOne({ nome, estacionamento_id });

        if (portaoExist) {
            throw new Error("Portão existente");
        }

        const estacionamento = await estacionamentoRepository.findOne({ id: estacionamento_id });

        if (!estacionamento) {
            throw new Error("Estacionamento não existe");
        }

        const portao = portaoRepository.create({ nome, estacionamento_id, estacionamento });
        await portaoRepository.save(portao);
        return portao;
    }
}

export { CreatePortaoService };