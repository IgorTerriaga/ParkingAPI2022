import { getCustomRepository } from "typeorm";
import { PortaoRepository } from "../repositories/PortaoRepository";
import { VagaRepository } from "../repositories/VagaRepository";

class CreteVagaService {
  async execute({ portao_id, numero, tipo, latitude, longitude }) {
    const vagaRepository = getCustomRepository(VagaRepository);
    const portaoRepository = getCustomRepository(PortaoRepository);

    const portao = await portaoRepository.findOne({ id: portao_id });

    if (!portao) {
      throw new Error("Portão não existe");
    }
    const vaga_exist = await vagaRepository.findOne({ portao_id, numero });
    if (vaga_exist) {
      throw new Error("Vaga já existe");
    }
    const vaga = vagaRepository.create({
      portao_id,
      numero,
      portao,
      tipo,
      latitude,
      longitude,
      status: false,
      recomendacao: false,
    });
    await vagaRepository.save(vaga);
    return vaga;
  }
}

export { CreteVagaService };
