import { EntityRepository, Repository } from "typeorm";
import { VeiculoVaga } from "../entities/VeiculoVaga";

@EntityRepository(VeiculoVaga)
class VeiculoVagaRepository extends Repository<VeiculoVaga>{
  async countVeiculoVaga(idVeiculo) {
    const vagas = await this.manager.query(`select count(*) quantidade, vaga.numero, p.nome, e.sede
                                            from veiculo_vaga vv 
                                            join vaga                                    
                                            on vv.vaga_id = vaga.id
                                            join portao p
                                            on vaga.portao_id = p.id
                                            join estacionamento e
                                            on p.estacionamento_id = e.id
                                            where vv.veiculo_id = '${idVeiculo}'                                          
                                            group by vaga.numero, e.sede, p.nome
                                            order by quantidade DESC;`);
    return vagas;
  }
}

export { VeiculoVagaRepository }