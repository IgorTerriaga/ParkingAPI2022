import { Request, Response } from "express";
import { GetVeiculoService } from "../services/GetVeiculoService";


class GetVeiculoController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;
        const acesso_id = req.acesso_id;
        const veiculo_service = new GetVeiculoService();
        const veiculo = await veiculo_service.execute({ id, acesso_id });
        return res.json(veiculo);
    }
}


export { GetVeiculoController };