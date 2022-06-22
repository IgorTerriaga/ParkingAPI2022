import { getCustomRepository } from "typeorm";
import { MotoristaRepository } from "../repositories/MotoristaRepository";

class UpdateMotoristaService {
  async execute({ id, latitude, longitude }) {
    const motoristaRepository = getCustomRepository(MotoristaRepository);
    const motorista = await motoristaRepository.findOne({ id });
    if (!motorista) {
      throw new Error("Motorista não encontrado");
    }

    const campos = ["latitude", "longitude"];
    const dados = { latitude, longitude };
    const datosAtualizados = {};
    campos.forEach((campo: string) => {
      if (dados[campo] !== undefined) datosAtualizados[campo] = dados[campo];
    });
    await motoristaRepository.update({id}, datosAtualizados);
    return await motoristaRepository.findOne({id});
  }
}

export { UpdateMotoristaService };
