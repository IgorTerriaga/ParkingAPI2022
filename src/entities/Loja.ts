import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Portao } from "./Portao";

@Entity("loja")
class Loja {
  @PrimaryColumn()
  id: string;
  @Column()
  nome: string;
  @Column()
  categoria: string;
  @Column()
  portao_id: string;

  @ManyToOne(() => Portao)
  @JoinColumn({ name: "portao_id" })
  portao: Portao;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Loja };
