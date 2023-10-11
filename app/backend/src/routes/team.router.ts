import { Router, Request, Response } from 'express';
import teamController from '../controllers/team.controller';

const router = Router();

router.get('/', (_req: Request, res: Response) => teamController.getTeams(_req, res));

export default router;
