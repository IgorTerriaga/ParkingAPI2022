import { Request, Response } from "express";
import { GetLojaService } from "../services/GetLojaService";
import { GetVagaService } from "../services/GetVagaService";
import { GetVeiculoService } from "../services/GetVeiculoService";

class GetVagaController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const vaga_service = new GetVagaService();
    const vaga = await vaga_service.execute({ id });
    return res.json(vaga);
  }
}

export { GetVagaController };
