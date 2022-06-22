import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validar se token é válido
    const { sub } = verify(
      token,
      "5b2c909ca4c5e565c7d7cec982465a23ad766987e3f612f690ea38cf58b5053f"
    ) as IPayload;

    // Recuperar informações do usuário
    request.acesso_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
}