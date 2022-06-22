import { getCustomRepository } from "typeorm";
import { VagaRepository } from "../repositories/VagaRepository";

class PutVagaService {
  async execute({ id, recomendacao }) {
    const vagaRepository = getCustomRepository(VagaRepository);
    const vaga = await vagaRepository.findOne({ id });

    const campos = ["recomendacao"];
    const dados = { recomendacao };
    const dadosAtualizados = {};

    campos.forEach((campo: string) => {
      if (dados[campo] !== undefined) dadosAtualizados[campo] = dados[campo];
    });

    await vagaRepository.update({id}, dadosAtualizados);
    return await vagaRepository.findOne({id});
    
  }
}
export { PutVagaService};