import { Request, Response } from 'express';
import teamService from '../services/team.service';

class TeamController {
  public static async getTeams(_req: Request, res: Response): Promise<Response> {
    const { payload } = await teamService.getTeams();

    return res.status(200).json(payload);
  }

  public static async getTeamId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { payload } = await teamService.getTeamById(Number(id));
    return res.status(200).json(payload);
  }
}

export default TeamController;
