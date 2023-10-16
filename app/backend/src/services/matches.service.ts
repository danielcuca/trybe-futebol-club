import MatchesModel from '../models/matches.model';

class matchesService {
  private matchesModel = new MatchesModel();

  public async findAllMatches() {
    const payload = await this.matchesModel.findAllMatches();
    return { payload };
  }
}

export default matchesService;
