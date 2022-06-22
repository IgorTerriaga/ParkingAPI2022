import { Request, Response } from "express";
import { ListVagaService } from "../services/ListVagaService";


class ListVagaController {
    async execute(req: Request, res: Response) {
        const { estacionamentoId } = req.params;
        const vaga_service = new ListVagaService();
        const vaga = await vaga_service.execute({ estacionamentoId });
        
        return res.json(vaga);

    }
}

export { ListVagaController };