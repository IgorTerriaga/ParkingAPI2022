import { Request, response, Response } from "express";
import { InformarDesocupacaoVagaService } from "../services/InformarDesocupacaoVagaService";

class InformarDesocupacaoVagaController {

    async execute(req: Request, res: Response) {
        const { id } = req.params;
        const vaga_service = new InformarDesocupacaoVagaService();
        const vaga = await vaga_service.execute({ id });
        console.log("Desocupar...");
        return res.json(vaga);
    }
}

export { InformarDesocupacaoVagaController }