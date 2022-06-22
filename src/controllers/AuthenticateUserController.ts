import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async execute(req: Request, res: Response) {
    const { email, senha } = req.body;

    //console.log("Igor");
    
    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({
      email,
      senha,
    });

    return res.json({ token });
  }
}

export { AuthenticateUserController };