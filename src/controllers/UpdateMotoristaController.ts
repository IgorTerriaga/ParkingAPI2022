import { Request, Response } from "express";
import { UpdateMotoristaService } from "../services/UpdateMotoristaService";
class UpdateMotoristaController {
    async execute(req: Request, res: Response) {
        const { id, latitude, longitude } = req.params;
        
        const motoristas_service = new UpdateMotoristaService();
        console.log("Aqui")
        try {
            const motorista = await motoristas_service.execute({ id, latitude, longitude });
            console.log("ok");

            return res.status(200).json(motorista);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
}


export { UpdateMotoristaController };