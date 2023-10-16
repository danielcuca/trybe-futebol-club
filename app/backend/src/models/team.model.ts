import Team from '../database/models/team.model';
import Matches from '../database/models/matchs.model';

class TeamModel {
  public static async getTeams() {
    const teams = await Team.findAll();
    return teams;
  }

  public static async getTeamById(id: number) {
    const team = await Team.findByPk(id);
    return team;
  }

  public static async getLeaderboard() {
    const data = await Team.findAll({
      include:
        { model: Matches,
          as: 'homeTeam',
          where: { inProgress: false },
        },
    });
    return data;
  }
}

export default TeamModel;
