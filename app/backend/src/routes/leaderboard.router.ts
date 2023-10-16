import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const router = Router();

router.get('/home', (_req: Request, res: Response) =>
  LeaderboardController.getLeaderBoardHome(_req, res));

export default router;
