import { Request, Response } from "express";
import { CreateEstacionamentoService } from "../services/CreateEstacionamentoService";

class CreateEstacionamentoController {

    async execute(req: Request, res: Response) {
        const { sede, longitude, latitude } = req.body;
        const estacionamento_service = new CreateEstacionamentoService();
        const estacionamento = await estacionamento_service.execute({ sede, longitude, latitude });
        return res.json(estacionamento);
    }

}


export { CreateEstacionamentoController };