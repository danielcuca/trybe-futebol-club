import { ModelStatic } from 'sequelize';
import MatchesModelDatabase from '../database/models/matchs.model';
import Team from '../database/models/team.model';

class MatchesModel {
  constructor(private matchesModel: ModelStatic<MatchesModelDatabase> = MatchesModelDatabase) {}

  public async findAllMatches() {
    const matches = await this.matchesModel.findAll({
      include: [
        {
          model: Team,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return matches;
  }
}

export default MatchesModel;
