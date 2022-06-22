import { Request, Response } from "express";
import { ListVeiculoService } from "../services/ListVeiculoService";


class ListVeiculoController {
  async execute(req: Request, res: Response) {
    const acesso_id = req.acesso_id;

    const veiculo_service = new ListVeiculoService();
    const veiculo = await veiculo_service.execute({ acesso_id });
    return res.json(veiculo);
  }
}


export { ListVeiculoController };
