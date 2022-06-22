import { getCustomRepository } from "typeorm";
import { VeiculoRepository } from "../repositories/VeiculoRepository";
import { VeiculoVagaRepository } from "../repositories/VeiculoVagaRepository";

class ListVagasOcupadasVeiculoService {

    async execute({ idVeiculo }) {
        const veiculoRepository = getCustomRepository(VeiculoRepository);
        const veiculoVagaRepository = getCustomRepository(VeiculoVagaRepository);

        const veiculo = await veiculoRepository.findOne({ id: idVeiculo });

        if (!veiculo)
            throw new Error("Veiculo não existe")

        const vagas = await veiculoVagaRepository.countVeiculoVaga(idVeiculo)

        return vagas;
    }
}


export { ListVagasOcupadasVeiculoService };