import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";

class InformarOcupacaoVagaService {
    async execute({ id }) {
        const vagaRepository = getCustomRepository(VagaRepository);
        const vaga = await vagaRepository.findOne({ id });


        if (!vaga) {
            throw new Error("Vaga inexistente");
        }
        if (vaga.status) {
            throw new Error("Vaga ocupada!!");
        }

        await vagaRepository.update({ id }, {
            status: true,
        })
    }
}

export { InformarOcupacaoVagaService };