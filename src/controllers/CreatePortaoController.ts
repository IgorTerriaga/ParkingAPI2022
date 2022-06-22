import { Request, Response } from "express";
import { CreatePortaoService } from "../services/CreatePortaoService";

class CreatePortaoController {
    async execute(req: Request, res: Response){
        const {nome, estacionamento_id} = req.body;
        const portao_service = new CreatePortaoService();
        const portao = await portao_service.execute({nome, estacionamento_id});
        return res.json(portao);
    }
}


export {CreatePortaoController};