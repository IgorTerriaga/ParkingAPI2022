import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { AcessoRepository } from "../repositories/AcessoRepository";

interface IAuthenticateRequest {
  email: string;
  senha: string;
}

class AuthenticateUserService {
  async execute({ email, senha }: IAuthenticateRequest) {
    const acessoRepositories = getCustomRepository(AcessoRepository);

    // Verificar se email existe
    const acesso = await acessoRepositories.findOne({
      email,
    });

    if (!acesso) {
      throw new Error("Email ou senha incorretos");
    }

    // verificar se senha está correta
    const passwordMatch = await compare(senha, acesso.senha);

    if (!passwordMatch) {
      throw new Error("Email ou senha incorretos");
    }

    // Gerar token
    const token = sign(
      { id: acesso.id },
      "5b2c909ca4c5e565c7d7cec982465a23ad766987e3f612f690ea38cf58b5053f",
      {
        subject: acesso.id,
        expiresIn: "10d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
