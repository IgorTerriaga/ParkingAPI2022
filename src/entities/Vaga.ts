import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Portao } from "./Portao";
import { Veiculo } from "./Veiculo";

@Entity("vaga")
class Vaga {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  status: boolean;
  @Column()
  portao_id: string;
  @Column()
  numero: string;
  @Column()
  tipo: string;
  @Column()
  longitude: number;
  @Column()
  latitude: number;

  @Column()
  recomendacao: boolean;

  @ManyToOne(() => Portao)
  @JoinColumn({ name: "portao_id" })
  portao: Portao;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Vaga };
