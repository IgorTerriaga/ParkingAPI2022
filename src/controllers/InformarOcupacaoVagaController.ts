import { Request, Response } from "express";
import { InformarOcupacaoVagaService } from "../services/InformarOcupacaoVagaService";

class InformarOcupacaoVagaController {

    async execute(req: Request, res: Response) {
        const { id } = req.params;
        const vaga_service = new InformarOcupacaoVagaService();
        const vaga = await vaga_service.execute({ id });
        console.log("Ocupar...");
        
        return res.json(vaga);
    }
}

export { InformarOcupacaoVagaController }