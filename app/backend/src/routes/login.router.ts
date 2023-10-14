import { Router, Request, Response } from 'express';
import loginController from '../controllers/login.controller';
import lgnMiddleware from '../middlewares/login.middleware';
import tknMddlwr from '../middlewares/token.middleware';

const router = Router();

router.post('/', lgnMiddleware, (_req: Request, res: Response) => loginController.login(_req, res));
router.get('/role', tknMddlwr, (req: Request, res: Response) => loginController.getRole(req, res));

export default router;
