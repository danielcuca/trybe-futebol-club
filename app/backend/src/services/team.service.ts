import teamModel from '../models/team.model';

class TeamService {
  public static async getTeams() {
    const teams = await teamModel.getTeams();
    return { type: 'SUCCESSFUL', payload: teams };
  }
}

export default TeamService;
