import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";
import { VeiculoVagaRepository } from "../repositories/VeiculoVagaRepository";

class InformarDesocupacaoVagaService {
    async execute({ id }) {
        const vagaRepository = getCustomRepository(VagaRepository);
        const veiculo_vagaRepository = getCustomRepository(VeiculoVagaRepository);
        const vaga = await vagaRepository.findOne({ id });

        if (!vaga) {
            throw new Error("Vaga inexistente");
        }

        const veiculo_vaga = await veiculo_vagaRepository.findOne({ vaga_id: id, status: true });

        if (veiculo_vaga) {
            await veiculo_vagaRepository.update({ id: veiculo_vaga.id }, { status: false })
        }

        await vagaRepository.update({ id }, {
            status: false,
            recomendacao : false
        })
    }
}

export { InformarDesocupacaoVagaService };