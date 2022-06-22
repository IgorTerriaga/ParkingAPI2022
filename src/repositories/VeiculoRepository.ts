import { EntityRepository, Repository } from "typeorm";
import { Veiculo } from "../entities/Veiculo";


@EntityRepository(Veiculo)
class VeiculoRepository extends Repository<Veiculo>{ }


export { VeiculoRepository }