import Team from '../database/models/team.model';

class TeamModel {
  public static async getTeams() {
    const teams = await Team.findAll();
    return teams;
  }

  public static async getTeamById(id: string) {
    const team = await Team.findByPk(id);
    return team;
  }
}

export default TeamModel;
