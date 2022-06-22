import { EntityRepository, Repository } from "typeorm";
import { Acesso } from "../entities/Acesso";

@EntityRepository(Acesso)
class AcessoRepository extends Repository<Acesso> { }

export { AcessoRepository };