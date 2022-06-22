import { Exclude } from "class-transformer";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Motorista } from "./Motorista";

@Entity("acesso")
class Acesso {
  @PrimaryColumn()
  readonly id: string;

  @Exclude()
  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  permissao: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Acesso };
