import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboard.service';

class leaderboardController {
  public static async getLeaderBoardHome(req: Request, res: Response) {
    const { payload } = await LeaderBoardService.getLeaderBoardHome();
    return res.status(200).json(payload);
  }
}

export default leaderboardController;
