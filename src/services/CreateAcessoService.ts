import { getCustomRepository } from "typeorm"
import { AcessoRepository } from "../repositories/AcessoRepository"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class CreateAcessoService {
  async execute({ email, senha, permissao }) {
    const acessoRepository = getCustomRepository(AcessoRepository);

    const acesso_exist = await acessoRepository.findOne({ email });

    if (acesso_exist) {
      throw new Error("Acesso já existe!")
    }

    if (!permissao) {
      throw new Error("Permissão é obrigatória")
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    const acesso = acessoRepository.create({
      email,
      senha: senha_hash,
      permissao
    });

    const token = jwt.sign({ email },
      "5b2c909ca4c5e565c7d7cec982465a23ad766987e3f612f690ea38cf58b5053f",
      {
        subject: acesso.id,
        expiresIn: "20d"
      });

    await acessoRepository.save(acesso);

    return acesso;
  }
}
export { CreateAcessoService }