import { Request, Response } from "express";
import { CreteVagaService } from "../services/CreateVagaService";

class CreateVagaController {
  async execute(req: Request, res: Response) {
    const { portao_id, numero, tipo, latitude, longitude } = req.body;
    const vaga_service = new CreteVagaService();
    const vaga = await vaga_service.execute({
      portao_id,
      numero,
      tipo,
      latitude,
      longitude,
    });
    return res.json(vaga);
  }
}

export { CreateVagaController };
