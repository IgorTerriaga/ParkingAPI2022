import { getCustomRepository } from "typeorm";
import { Vaga } from "../entities/Vaga";
import { EstacionamentoRepository } from "../repositories/EstacionamentoRepository";
import { MotoristaRepository } from "../repositories/MotoristaRepository";
import { VagaRepository } from "../repositories/VagaRepository";
import { getDistanceFromLatLonInKm, minPosArray } from "../utils/validation";

export interface IRecomendaRequest {
  /** Id do Motorista ao qual será recomendado uma vaga */
  idMotorista: string;
  /** Id do Estacionamento no qual o motorista está */
  idEstacionamento: string;
  /** Id da Loja que o motorista gostaria de ir */
  idLoja?: string;

  idVaga?: string;

  longitude?: number;

  latitude?: number;
}

/**
 * Classe responsavel pelo Serviço de Recomendar Vaga para Motorista
 */
class RecomendarVagaService {
  /**
   * Função que retorna um aleatório entre 0 e o parâmetro passado
   * @param {number} max - maior número possivel
   * @returns {number} número aleatório
   */
  randomIntFromInterval(max: number): number {
    return Math.floor(Math.random() * (max - 0 + 1) + 0);
  }

  /**
   * Metodo que recomenda vaga para um motorista
   * @param {IRecomendaRequest}
   * @throws Nenhuma vaga foi encontrada para as caracteristicas do motorista naquele estacionamento
   * @returns {{vaga: string}} número da vaga recomendada
   */
  async execute({
    idMotorista,
    idEstacionamento,
    idLoja,
    idVaga,
    latitude,
    longitude,
  }: IRecomendaRequest): Promise<{
    vaga: string;
    latitude: number;
    longitude: number;
    id: string;
    status: boolean;
  }> {
    const vagaRepository = getCustomRepository(VagaRepository);
    const motoristaRepository = getCustomRepository(MotoristaRepository);
    //const estacionamentoRepository = getCustomRepository(EstacionamentoRepository);

    const motorista = await motoristaRepository.findOne({ id: idMotorista });

    let tipo = "normal";

    if (motorista.deficiente) {
      tipo = "deficiente";
    } else if (motorista.idoso) {
      tipo = "idoso";
    }

    let vaga: Vaga[];

    if (idEstacionamento) {
      console.log("passou o id do Estacionamento");
      if (idLoja) {
        console.log("passou o id da loja");
        vaga = await vagaRepository.recomendaVagaLoja(
          idEstacionamento,
          tipo,
          idLoja
        );
      } else {
        vaga = await vagaRepository.recomendaVaga(idEstacionamento, tipo);
      }
    } else {
      const vagas = await vagaRepository.find();

      const distancias = vagas.map((e) => {
        return getDistanceFromLatLonInKm(
          { lat: latitude, lng: longitude },
          { lat: e.latitude, lng: e.longitude }
        );
      });
      idEstacionamento = vagas[minPosArray(distancias)].id;
      //console.log(vaga);

      vaga = await vagaRepository.recomendaVaga(idEstacionamento, tipo);
    }

    if ((tipo == "deficiente" || tipo == "idoso") && vaga.length === 0) {
      if (idLoja) {
        vaga = await vagaRepository.recomendaVagaLoja(
          idEstacionamento,
          "normal",
          idLoja
        );
      } else {
        vaga = await vagaRepository.recomendaVaga(idEstacionamento, "normal");
      }
    }

    if (vaga.length === 0) {
      throw new Error("Nenhuma vaga disponível.");
    }

    //console.log(vaga);

    const vagaRecomendada = vaga[this.randomIntFromInterval(vaga.length - 1)];

    const x = await vagaRepository.update(vagaRecomendada.id, {
      recomendacao: true,
    });
    //console.log(x);

    /**
     * se recusou a recomendação
     */
    if (idVaga) {
      await vagaRepository.update({ id: idVaga }, { recomendacao: false });
    }

    return {
      vaga: vagaRecomendada.numero,
      latitude: vagaRecomendada.latitude,
      longitude: vagaRecomendada.longitude,
      id: vagaRecomendada.id,
      status: vagaRecomendada.status
    };
  }
}

export { RecomendarVagaService };
