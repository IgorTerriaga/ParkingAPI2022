import { Request, Response } from "express";
import { ListVagasOcupadasVeiculoService } from "../services/ListVagasOcupadasVeiculoService";

class ListVagasOcupadasVeiculoController {
    async execute(req: Request, res: Response) {
        const { idVeiculo } = req.params;

        const listVagasOcupadasVeiculoService = new ListVagasOcupadasVeiculoService();

        const vagas = await listVagasOcupadasVeiculoService.execute({ idVeiculo });

        return res.json(vagas);
    }
}

export { ListVagasOcupadasVeiculoController }