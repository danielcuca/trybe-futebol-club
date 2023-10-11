import Team from '../database/models/team.model';

class TeamModel {
  public static async getTeams() {
    const teams = await Team.findAll();
    return teams;
  }
}

export default TeamModel;
