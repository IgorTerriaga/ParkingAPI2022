import { getCustomRepository } from "typeorm";
import { MotoristaRepository } from "../repositories/MotoristaRepository";
import { VeiculoRepository } from "../repositories/VeiculoRepository";

class ListVeiculoService {
  async execute({ acesso_id }) {
    const veiculoRepository = getCustomRepository(VeiculoRepository);
    const motoristaRepository = getCustomRepository(MotoristaRepository);

    const motorista = await motoristaRepository.findOne({ acesso_id })

    const veiculo = await veiculoRepository.find({ motorista_id: motorista.id });

    return veiculo;
  }
}

export { ListVeiculoService };