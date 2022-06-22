import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Estacionamento } from "./Estacionamento";

@Entity("portao")
class Portao {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  nome: string;
  @Column()
  estacionamento_id: string;

  @ManyToOne(() => Estacionamento, (estacionamento) => estacionamento.portao)
  @JoinColumn({ name: "estacionamento_id" })
  estacionamento: Estacionamento;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Portao };
