import { getCustomRepository } from "typeorm";
import { EstacionamentoRepository } from "../repositories/EstacionamentoRepository";

class CreateEstacionamentoService {
    async execute({ sede, longitude, latitude }) {
        const estacionamentoRepository = getCustomRepository(EstacionamentoRepository);
        const estacionamento_exist = await estacionamentoRepository.findOne({ sede })

        if (estacionamento_exist) {
            throw new Error("Sede já existente")
        }
        const estacionamento = estacionamentoRepository.create({ sede, latitude: parseFloat(latitude), longitude: parseFloat(longitude) });

        await estacionamentoRepository.save(estacionamento);
        return estacionamento;
    }

}

export { CreateEstacionamentoService };