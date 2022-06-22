import { getCustomRepository } from "typeorm";
import { MotoristaRepository } from "../repositories/MotoristaRepository";
import { VeiculoRepository } from "../repositories/VeiculoRepository";
import { validaPlaca } from "../utils/validation";

function validateData({ modelo, placa, cor, motorista_id }) {
    const data = { modelo, placa, cor, motorista_id };
    const campos = ["modelo", "placa", "cor", "motorista_id"];

    campos.forEach((c: string) => {
        if(data[c] === undefined)
            throw new Error(`O campo ${c} é obrigatório.`)
    })
}

class CreateVeiculoService {
    async execute({ modelo, placa, cor, motorista_id }) {
        validateData({ modelo, placa, cor, motorista_id });

        const motoristaRepository = getCustomRepository(MotoristaRepository);
        const veiculoRepository = getCustomRepository(VeiculoRepository);

        const motorista = await motoristaRepository.findOne(motorista_id);

        if (!motorista) {
            throw new Error("Motorista não existe");
        }

        const veiculo_exist = await veiculoRepository.findOne({ placa });

        if (veiculo_exist) {
            throw new Error("Veículo com essa placa já existe");
        }


        // if (!validaPlaca(placa)) {
        //     throw new Error("Por favor, use uma placa válida.")
        // }
        
        const veiculo = veiculoRepository.create({
            modelo,
            placa,
            cor,
            motorista_id: motorista.id
        });

        await veiculoRepository.save(veiculo);

        return veiculo;
    }
}

export { CreateVeiculoService };