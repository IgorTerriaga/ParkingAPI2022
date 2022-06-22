import { Request, Response } from "express";
import { RecomendarVagaService } from "../services/RecomendarVagaService";

class RecomendarVagaController {
  async execute(req: Request, res: Response) {
    const { idMotorista } = req.params;
    const { idEstacionamento, idLoja, longitude, latitude, idVaga } = req.body;
    
  //portao.
    const recomendar_vaga_simples = new RecomendarVagaService();
    const vaga = await recomendar_vaga_simples.execute({
      idMotorista,
      idEstacionamento,
      idLoja,
      idVaga,
      latitude,
      longitude,
    });

    
    


    return res.json(vaga);
  }
}

export { RecomendarVagaController };
