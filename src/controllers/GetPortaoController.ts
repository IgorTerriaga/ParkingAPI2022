import { Request, Response } from "express";
import { GetPortaoService } from "../services/GetPortaoService";


class GetPortaoController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;
        const portao_service = new GetPortaoService();
        const portao = await portao_service.execute({ id });
        return res.json(portao);
    }
}


export { GetPortaoController };