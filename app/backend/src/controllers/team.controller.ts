import { Request, Response } from 'express';
import teamService from '../services/team.service';

class TeamController {
  public static async getTeams(_req: Request, res: Response): Promise<Response> {
    const { payload } = await teamService.getTeams();
    // if (type) return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(payload);
  }
}

export default TeamController;
