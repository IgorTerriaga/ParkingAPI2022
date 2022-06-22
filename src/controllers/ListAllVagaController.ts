import { Request, Response } from "express";
import { ListAllVagaService } from "../services/ListAllVagaService";

class ListAllVagaController {
  async execute(req: Request, res: Response) {
    const controle = new ListAllVagaService();
    const vaga = await controle.execute();
    console.log(vaga)
    return res.json(vaga);
  }
}

export { ListAllVagaController };
