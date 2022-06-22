import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Acesso } from "./Acesso";
import { Veiculo } from "./Veiculo";
@Entity("motorista")
class Motorista {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  acesso_id: string;

  @Column()
  deficiente: Boolean;

  @Column()
  idoso: Boolean;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToOne(() => Acesso)
  @JoinColumn({ name: "acesso_id" })
  acesso: Acesso;

  @OneToMany(() => Veiculo, (veiculo) => veiculo.motorista)
  veiculos: Veiculo[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Motorista };
