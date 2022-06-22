import { Request, Response } from "express";
import { CreateLojaService } from "../services/CreateLojaService";


class CreateLojaController {


    async execute(req: Request, res: Response) {
        const { nome, categoria, portao_id } = req.body;
        const loja_service = new CreateLojaService();
        const loja = await loja_service.execute({ nome, categoria, portao_id });
        return res.json(loja);
    }
}

export { CreateLojaController };