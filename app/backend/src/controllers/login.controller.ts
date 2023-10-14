import { Request, Response } from 'express';
import loginService from '../services/login.service';

class loginController {
  public static async login(req: Request, res: Response) {
    const { type, payload } = await loginService.login(req.body);
    if (type) {
      return res.status(401).json(payload);
    }
    return res.status(200).json(payload);
  }

  public static async getRole(req: Request, res: Response) {
    const { role } = req.body.user;
    return res.status(200).json({ role });
  }
}

export default loginController;
