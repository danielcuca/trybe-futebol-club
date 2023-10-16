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

  public async findAllMatchesInProgress(inProgress: boolean) {
    const matches = await this.matchesModel.findAll({
      where: {
        inProgress,
      },
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

  public async finishMatch(id: number) {
    const match = await this.matchesModel.findByPk(id);
    if (!match) {
      throw new Error('Match not found');
    }
    await match.update({ inProgress: false });
    return { message: 'Finished' };
  }

  public async updateProgressMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const match = await this.matchesModel.findByPk(id);
    if (!match) {
      throw new Error('Match not found');
    }
    await match.update({
      homeTeamGoals,
      awayTeamGoals,
    });
    return { homeTeamGoals, awayTeamGoals };
  }

  public async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const match = await this.matchesModel.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return match;
  }
}

export default MatchesModel;
