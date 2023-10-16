import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  private matchesService = new MatchesService();

  public getAllMatches = async (_req: Request, res: Response) => {
    const { payload } = await this.matchesService.findAllMatches();
    res.status(200).json(payload);
  };
}
