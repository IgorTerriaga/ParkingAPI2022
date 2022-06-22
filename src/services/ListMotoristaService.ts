import { getCustomRepository } from "typeorm";
  import { Motorista } from "../entities/Motorista";
import { MotoristaRepository } from "../repositories/MotoristaRepository";

class ListMotoristaService {
  async execute() {
    const motoristaRepository = getCustomRepository(MotoristaRepository);
    const motoristas: Motorista[] = await motoristaRepository.find({ relations: ["acesso"] });

    return motoristas;
  }

}

export { ListMotoristaService };