import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";

class ListAllVagaService {
  async execute() {
    const vagaRepository = getCustomRepository(VagaRepository);
    const vaga = await vagaRepository.find({ order: { portao_id: "ASC" } });
    return vaga;
  }
}

export { ListAllVagaService };
