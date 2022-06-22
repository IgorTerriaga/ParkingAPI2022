import { Request, Response } from "express";
import { CreateMotoristaService } from "../services/CreateMotoristaService";

class CreateMotoristaController {

    async execute(req: Request, res: Response) {
        const { nome, email, senha, deficiente, idoso } = req.body;
        const motorista_service = new CreateMotoristaService();
        const motorista = await motorista_service.execute({ nome, email, deficiente, idoso, senha });
        return res.json(motorista);
    }

}


export { CreateMotoristaController };