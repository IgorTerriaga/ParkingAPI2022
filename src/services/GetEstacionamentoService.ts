import { getCustomRepository } from "typeorm";
import { EstacionamentoRepository } from "../repositories/EstacionamentoRepository";

class GetEstacionamentoService {
  async execute({ id }) {
    const estacionamentoRepository = getCustomRepository(EstacionamentoRepository);
    const estacionamento = await estacionamentoRepository.findOne({ id });

    return estacionamento;
  }

}

export { GetEstacionamentoService };