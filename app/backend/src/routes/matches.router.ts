import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (_req: Request, res: Response) => matchesController.getAllMatches(_req, res));

export default router;
