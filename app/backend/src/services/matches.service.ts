import MatchesModel from '../models/matches.model';
import Team from '../models/team.model';

class matchesService {
  private matchesModel = new MatchesModel();

  public async findAllMatches(inProgress?: string) {
    if (inProgress) {
      const inProgressBool = JSON.parse(inProgress);
      const payload = await this.matchesModel.findAllMatchesInProgress(inProgressBool);
      return { payload };
    }
    const payload = await this.matchesModel.findAllMatches();
    return { payload };
  }

  public async finishMatch(id: number) {
    const payload = await this.matchesModel.finishMatch(id);
    return { payload };
  }

  public async updateProgressMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const payload = await this.matchesModel.updateProgressMatch(id, homeTeamGoals, awayTeamGoals);
    return { payload };
  }

  public async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const homeTeam = await Team.getTeamById(Number(homeTeamId));
    const awayTeam = await Team.getTeamById(Number(awayTeamId));
    if (!homeTeam || !awayTeam) {
      return { type: 'NOT_FOUND', payload: { message: 'There is no team with such id!' } };
    }
    const payload = await this
      .matchesModel.createMatch(homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals);
    return { payload };
  }
}

export default matchesService;
