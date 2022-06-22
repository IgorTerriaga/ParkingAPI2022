import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Motorista } from "./Motorista";
import { Vaga } from "./Vaga";

@Entity("veiculo")
class Veiculo {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  modelo: string;

  @Column()
  placa: string;

  @Column()
  cor: string;

  @Column()
  motorista_id: string;

  @ManyToOne(() => Motorista)
  @JoinColumn({ name: "motorista_id" })
  motorista: Motorista;

  @ManyToMany(() => Vaga)
  @JoinTable()
  vagas: Vaga;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Veiculo };
