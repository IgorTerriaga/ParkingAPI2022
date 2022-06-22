import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";
import { VeiculoRepository } from "../repositories/VeiculoRepository";
import { VeiculoVagaRepository } from "../repositories/VeiculoVagaRepository";

class VeiculoOcuparVagaService {

    async execute({ idVeiculo, idVaga }) {
        const vagaRepository = getCustomRepository(VagaRepository);
        const veiculoRepository = getCustomRepository(VeiculoRepository);
        const veiculoVagaRepository = getCustomRepository(VeiculoVagaRepository);

        const vaga = await vagaRepository.findOne({ id: idVaga });
        const veiculo = await veiculoRepository.findOne({ id: idVeiculo });

        
        if (!vaga.status) {
            throw new Error("Vaga não está ocupada")
        }

        if (!veiculo)
            throw new Error("Veiculo não existe")

        const vaga_ocupada = await veiculoVagaRepository.findOne({ vaga_id: idVaga, status: true })

        if (vaga_ocupada) {
            throw new Error("Essa vaga já está ocupada por um veiculo")
        }

        const veiculo_ocupa = await veiculoVagaRepository.findOne({ veiculo_id: idVeiculo, status: true })

        if (veiculo_ocupa) {
            throw new Error("Esse veiculo já ocupa uma vaga")
        }

        const veiculo_vaga = veiculoVagaRepository.create({
            vaga,
            veiculo,
            vaga_id: idVaga,
            veiculo_id: idVeiculo,
            status: true
        });

        await veiculoVagaRepository.save(veiculo_vaga);

    }
}


export { VeiculoOcuparVagaService };