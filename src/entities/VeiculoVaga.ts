import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Vaga } from "./Vaga";
import { Veiculo } from "./Veiculo";

@Entity("veiculo_vaga")
class VeiculoVaga {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  veiculo_id: string;

  @Column()
  vaga_id: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Veiculo)
  @JoinColumn({ name: "veiculo_id" })
  veiculo: Veiculo;

  @ManyToOne(() => Vaga)
  @JoinColumn({ name: "vaga_id" })
  vaga: Vaga;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { VeiculoVaga };
