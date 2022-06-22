import { EntityRepository, Repository } from "typeorm";
import { Vaga } from "../entities/Vaga";

@EntityRepository(Vaga)
class VagaRepository extends Repository<Vaga> {
  async listarVagas(estacionamento_id) {
    const vagas = await this.createQueryBuilder("vaga")
      .innerJoin("vaga.portao", "vaga")
      .where("portao.estacionamento_id = :estacionamento_id", {
        estacionamento_id,
      })
      .printSql()
      .getMany();
    return vagas;
  }

  async buscarVaga(estacionamento_id) {
    const vaga = await this.createQueryBuilder("vaga")
      .innerJoin("vaga.portao", "portao")
      .where("portao.estacionamento_id = :estacionamento_id", {
        estacionamento_id,
      })
      .printSql()
      .getMany();
    return vaga;
  }

  async recomendaVaga(estacionamento_id, tipo) {
    const vaga = await this.createQueryBuilder("vaga")
      .innerJoin("vaga.portao", "portao")
      .where("portao.estacionamento_id = :estacionamento_id", {
        estacionamento_id,
      })
      .andWhere("vaga.status = false")
      .andWhere("vaga.tipo = :tipo", { tipo })
      .andWhere("vaga.recomendacao = false")
      .printSql()
      .getMany();
    return vaga;
  }

  async recomendaVagaLoja(estacionamento_id, tipo, loja_id) {
    const vaga = await this.manager
      .query(`select vaga.id, vaga.portao_id, vaga.status, vaga.tipo, vaga.numero, vaga.recomendacao, vaga.latitude, vaga.longitude from vaga 
    join portao on vaga.portao_id = portao.id 
    join loja on loja.portao_id = portao.id 
    where loja.id = '${loja_id}'
    and portao.estacionamento_id = '${estacionamento_id}'
    and vaga.tipo = '${tipo}'
    and vaga.recomendacao = false
    and vaga.status = false;
    `);

    console.log(vaga);

    return vaga;
  }
}

export { VagaRepository };
