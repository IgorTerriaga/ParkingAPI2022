import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";

class ListVagaService {
    async execute({ estacionamentoId }) {
        const vagaRepository = getCustomRepository(VagaRepository);
        const vaga = await vagaRepository.buscarVaga(estacionamentoId);
        return vaga;
    }
}

export { ListVagaService };