import teamModel from '../models/team.model';

class TeamService {
  public static async getTeams() {
    const teams = await teamModel.getTeams();
    return { type: 'SUCCESSFUL', payload: teams };
  }

  public static async getTeamById(id: string) {
    const team = await teamModel.getTeamById(id);
    return { type: 'SUCCESSFUL', payload: team };
  }
}

export default TeamService;
