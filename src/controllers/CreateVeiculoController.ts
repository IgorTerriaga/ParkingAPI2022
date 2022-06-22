import { Request, Response } from "express";
import { CreateVeiculoService } from "../services/CreateVeiculoService";

class CreateVeiculoController {
    async execute(req: Request, res: Response) {

        const { modelo, placa, cor, motorista_id } = req.body;

        //const acesso_id = req.acesso_id;

        const veiculo_service = new CreateVeiculoService();

        const veiculo = await veiculo_service.execute({ modelo, placa, cor, motorista_id });

        return res.json(veiculo);
    }
}


export { CreateVeiculoController };