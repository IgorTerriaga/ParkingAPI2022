import { Request, Response } from "express";
import { GetEstacionamentoService } from "../services/GetEstacionamentoService";

class GetEstacionamentoController {
    async execute(req: Request, res: Response) {
        
        const { id } = req.params;
        const estacionamento_service = new GetEstacionamentoService();
        const estacionamento = await estacionamento_service.execute({ id });

        return res.json(estacionamento);
    }
}

export { GetEstacionamentoController };