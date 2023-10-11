import { Router, Request, Response } from 'express';
import teamController from '../controllers/team.controller';

const router = Router();

router.get('/', (_req: Request, res: Response) => teamController.getTeams(_req, res));
router.get('/:id', (_req: Request, res: Response) => teamController.getTeamId(_req, res));

export default router;
