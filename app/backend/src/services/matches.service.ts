import MatchesModel from '../models/matches.model';

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
}

export default matchesService;
