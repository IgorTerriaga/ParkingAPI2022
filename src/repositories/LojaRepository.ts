import { EntityRepository, Repository } from "typeorm";
import { Loja } from "../entities/Loja";

@EntityRepository(Loja)
class LojaRepository extends Repository<Loja>{
  async listarLojas(estacionamento_id) {
    const lojas = await this.createQueryBuilder("loja")
      .innerJoin("loja.portao", "portao")
      .where("portao.estacionamento_id = :estacionamento_id", { estacionamento_id })
      .printSql()
      .getMany();
      console.log(lojas);
      
    return lojas;
  }

  async buscarLoja(loja_id, estacionamento_id) {
    const lojas = await this.createQueryBuilder("loja")
      .innerJoin("loja.portao", "portao")
      .where("portao.estacionamento_id = :estacionamento_id", { estacionamento_id })
      .where("loja.id = :loja_id", { loja_id })
      .printSql()
      .getMany();

    return lojas;
  }
}

export { LojaRepository };