import { Request, Response } from "express";
import { PutVagaService } from "../services/PutVagaService";

class UpdateVagaController{
    async execute(req: Request, res: Response) {
        const  { id } = req.params;
        const { recomendacao } = req.body;
        const vaga_service = new PutVagaService();
        
        try{
            const vaga = await vaga_service.execute({id, recomendacao});
            return res.status(201).json(vaga);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

export {UpdateVagaController};