import { Request, Response } from "express";
import { GetMotoristaService } from "../services/GetMotoristaService";

class GetMotoristaController {
    async execute(req: Request, res: Response) {
        const id = req.acesso_id;
        const motorista_service = new GetMotoristaService();
        const motorista = await motorista_service.execute({ id });

        return res.json(motorista);
    }
}

export { GetMotoristaController };