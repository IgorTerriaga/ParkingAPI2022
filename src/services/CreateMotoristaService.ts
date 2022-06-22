import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { AcessoRepository } from "../repositories/AcessoRepository";
import { MotoristaRepository } from "../repositories/MotoristaRepository";
import { getRandomInt } from "../utils/validation";
import { GetMotoristaService } from "./GetMotoristaService";

interface IMotoristaRequest {
  nome: string;
  email: string;
  senha: string;
  idoso: Boolean;
  deficiente: Boolean;
}

class CreateMotoristaService {
  async execute({ nome, deficiente, idoso, email, senha }: IMotoristaRequest) {
    const motoristaRepository = getCustomRepository(MotoristaRepository);
    const acessoRepository = getCustomRepository(AcessoRepository);

    if (!email) {
      throw new Error("E-mail é obrigatório");
    }

    if (!senha) {
      throw new Error("Senha é obrigatório");
    }

    if (senha.length < 6) {
      throw new Error("Tamanho minimo da senha é de 6 caracteres");
    }

    const motorista_exist = await acessoRepository.findOne({ email });

    if (motorista_exist) {
      throw new Error("Motorista com esse email já existe");
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    const acesso = acessoRepository.create({
      email,
      senha: senha_hash,
      permissao: "Motorista",
    });

    await acessoRepository.save(acesso);

    const latitude = getRandomInt(-10.0, -10.688);
    const longitude = getRandomInt(-10.0, -37.43399);
    const motorista = motoristaRepository.create({
      nome,
      idoso: idoso,
      deficiente: deficiente,
      longitude: longitude,
      latitude: latitude,
      acesso_id: acesso.id,
      acesso,
    });

    await motoristaRepository.save(motorista);
    const id = await motoristaRepository.findOne(motorista.id);

    const token = jwt.sign(
      { email },
      "5b2c909ca4c5e565c7d7cec982465a23ad766987e3f612f690ea38cf58b5053f",
      {
        subject: acesso.id,
        expiresIn: "20d",
      }
    );
    let idDriver;

    console.log(id);
    
    for (let key in id) {
        idDriver = id["id"];
    }

    return { token, idDriver};
  }
}

export { CreateMotoristaService };
