import { Request, Response } from "express";
import { ListEstacionamentoService } from "../services/ListEstacionamentoService";

class ListEstacionamentoController {
    async execute(req: Request, res: Response) {
        const estacionamento_service = new ListEstacionamentoService();
        const estacionamento = await estacionamento_service.execute();
        return res.json(estacionamento);
    }
}

export { ListEstacionamentoController };