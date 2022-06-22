import { getCustomRepository } from "typeorm";
import { MotoristaRepository } from "../repositories/MotoristaRepository";
import { VeiculoRepository } from "../repositories/VeiculoRepository";

class UpdateVeiculoService {
    async execute({ id, modelo, placa, cor, acesso_id }) {
        const veiculoRepository = getCustomRepository(VeiculoRepository);
        const motoristaRepository = getCustomRepository(MotoristaRepository);
        const motorista = await motoristaRepository.findOne({ acesso_id });
        const veiculo = await veiculoRepository.findOne({ id });
        //console.log(veiculo);


        if (!veiculo) {
            throw new Error("veiculo não existe");
        }

        const campos = ["modelo", "placa", "cor"];
        const dados = {
            modelo, placa, cor
        }
        const dadosAtualizados = {}

        campos.forEach((campo: string) => {
            if (dados[campo] !== undefined)
                dadosAtualizados[campo] = dados[campo]
        });

        await veiculoRepository.update({ id }, dadosAtualizados);

        return await veiculoRepository.findOne({ placa });
    }
}


export { UpdateVeiculoService };