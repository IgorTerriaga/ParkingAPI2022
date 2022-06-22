import { getCustomRepository } from "typeorm";
import { MotoristaRepository } from "../repositories/MotoristaRepository";

class GetMotoristaService {
  async execute({ id }) {
    const motoristaRepository = getCustomRepository(MotoristaRepository);

    const motorista = await motoristaRepository.findOne({ acesso_id: id }, { relations: ["veiculos"] });

    motorista["IdDriver"] = motorista["id"];
    

    return motorista;
  }

}

export { GetMotoristaService };