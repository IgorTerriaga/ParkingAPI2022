import { Request, Response } from "express";
import { CreateAcessoService } from "../services/CreateAcessoService";

class CreateAcessoController {
  async execute(req: Request, res: Response) {
    const { email, senha, permissao } = req.body;
    const createAcessoService = new CreateAcessoService();
    const acesso = await createAcessoService.execute({ email, senha, permissao });

    return res.status(201).send(acesso);
  }
}

export { CreateAcessoController }