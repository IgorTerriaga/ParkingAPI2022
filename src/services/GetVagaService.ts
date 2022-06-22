import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";

class GetVagaService {
  async execute({ id }) {
    const vagaRepository = getCustomRepository(VagaRepository);
    const vaga = await vagaRepository.findOne({ id });
    return vaga;
  }
}

export { GetVagaService };
