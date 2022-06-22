import { Request, Response } from "express";
import { VeiculoOcuparVagaService } from "../services/VeiculoOcuparVagaService";

class VeiculoOcuparVagaController {
    async execute(req: Request, res: Response) {
        const { idVaga, idVeiculo } = req.params;

        const veiculoOcuparVagaService = new VeiculoOcuparVagaService();

        await veiculoOcuparVagaService.execute({ idVaga, idVeiculo });

        return res.send();
    }
}

export { VeiculoOcuparVagaController }