import { EntityRepository, Repository } from "typeorm";
import { Portao } from "../entities/Portao";

@EntityRepository(Portao)
class PortaoRepository extends Repository<Portao>{
    
}

export {PortaoRepository}