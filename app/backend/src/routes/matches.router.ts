import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matches.controller';
import tokenValidationMiddleware from '../middlewares/token.middleware';
import matchesMiddleware from '../middlewares/matches.middleware';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (_req: Request, res: Response) => matchesController.getAllMatches(_req, res));

router.patch('/:id/finish', tokenValidationMiddleware, (_req: Request, res: Response) =>
  matchesController.finishMatch(_req, res));

router.patch('/:id', tokenValidationMiddleware, (_req: Request, res: Response) =>
  matchesController.updateProgressMatch(_req, res));

router.post('/', tokenValidationMiddleware, matchesMiddleware, (_req: Request, res: Response) =>
  matchesController.createMatch(_req, res));

export default router;
