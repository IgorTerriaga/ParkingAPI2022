import { Request, Response } from "express";
import { ListPortaoService } from "../services/ListPortaoService";


class ListPortaoController {
    async execute(req: Request, res: Response) {
        const portao_service = new ListPortaoService();
        const portao = await portao_service.execute();
        return res.json(portao);
    }
}


export { ListPortaoController };