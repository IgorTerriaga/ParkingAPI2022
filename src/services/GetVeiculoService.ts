import { getCustomRepository } from "typeorm";
import { MotoristaRepository } from "../repositories/MotoristaRepository";
import { VeiculoRepository } from "../repositories/VeiculoRepository";

class GetVeiculoService {
    async execute({ id, acesso_id }) {
        const motoristaRepository = getCustomRepository(MotoristaRepository);
        const veiculoRepository = getCustomRepository(VeiculoRepository);

        const motorista = await motoristaRepository.findOne({ acesso_id })

        const veiculo = await veiculoRepository.findOne({ id, motorista_id: motorista.id });

        if (!veiculo) {
            throw new Error("Veiculo não encontrado");
        }

        return veiculo;
    }
}


export { GetVeiculoService };