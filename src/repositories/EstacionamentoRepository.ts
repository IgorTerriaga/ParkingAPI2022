import { EntityRepository, Repository } from "typeorm";
import { Estacionamento } from "../entities/Estacionamento";

@EntityRepository(Estacionamento)
class EstacionamentoRepository extends Repository<Estacionamento> {
}

export { EstacionamentoRepository };