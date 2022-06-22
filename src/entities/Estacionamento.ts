import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Portao } from "./Portao";

@Entity("estacionamento")
class Estacionamento {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  sede: string;

  @OneToMany(() => Portao, (portao) => portao.estacionamento)
  portao: Portao[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Estacionamento };
