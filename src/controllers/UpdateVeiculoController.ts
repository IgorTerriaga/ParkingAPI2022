import { Request, Response } from "express";
import { UpdateVeiculoService } from "../services/UpdateVeiculoService";

class UpdateVeiculoController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;
        const { modelo, placa, cor } = req.body;
        const acesso_id = req.acesso_id;
        const veiculo_service = new UpdateVeiculoService();
        try {
            const veiculo = await veiculo_service.execute({ id, modelo, placa, cor, acesso_id });

            return res.status(200).json(veiculo);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}


export { UpdateVeiculoController };