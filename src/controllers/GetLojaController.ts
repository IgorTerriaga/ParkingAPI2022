import { GetLojaService } from "../services/GetLojaService";
import { Request, Response } from "express";

class GetLojaController {
    async execute(req: Request, res: Response) {
        const { idLoja, estacionamentoId } = req.params;
        const loja_service = new GetLojaService();
        const loja = await loja_service.execute({ idLoja, estacionamentoId });

        return res.json(loja);
    }
}


export { GetLojaController };