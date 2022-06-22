import { Request, Response } from "express";

import { ListLojaService } from "../services/ListLojaService";

class ListLojaController {
    async execute(req: Request, res: Response) {
        const { estacionamentoId } = req.params;
        const loja_service = new ListLojaService();
        const loja = await loja_service.execute({ estacionamentoId });
        return res.json(loja);
    }
}

export { ListLojaController }