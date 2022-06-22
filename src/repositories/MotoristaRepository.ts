import { EntityRepository, Repository } from "typeorm";
import { Motorista } from "../entities/Motorista";

@EntityRepository(Motorista)
class MotoristaRepository extends Repository<Motorista> {

}

export { MotoristaRepository };
