import { getCustomRepository } from "typeorm";
import { EstacionamentoRepository } from "../repositories/EstacionamentoRepository";

class ListEstacionamentoService {
  async execute() {
    const estacionamentoRepository = getCustomRepository(EstacionamentoRepository);
    const estacionamento = await estacionamentoRepository.find();

    return estacionamento;
  }

}

export { ListEstacionamentoService };