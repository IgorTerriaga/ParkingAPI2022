import { Request, Response } from "express";
import { ListMotoristaService } from "../services/ListMotoristaService";

class ListMotoristaController {
    async execute(req: Request, res: Response) {
        const motorista_service = new ListMotoristaService();
        const motorista = await motorista_service.execute();
        return res.json(motorista);
    }
}

export { ListMotoristaController };