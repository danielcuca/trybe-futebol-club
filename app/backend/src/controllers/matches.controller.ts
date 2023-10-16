import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  private matchesService = new MatchesService();

  public getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const { payload } = await this.matchesService.findAllMatches(inProgress as string);
    res.status(200).json(payload);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { payload } = await this.matchesService.finishMatch(Number(id));
    res.status(200).json(payload);
  };
}
