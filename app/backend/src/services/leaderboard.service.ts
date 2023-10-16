import teamModel from '../models/team.model';
import UtilsLeaderBoard from '../utils/leaderBoardUtils';

class LeaderBoardService {
  public static async getLeaderBoardHome() {
    const teamWithMatches = await teamModel.getLeaderboard();
    console.log(teamWithMatches);
    const teamWithMatchesToJSON = teamWithMatches.map((team: any) => {
      const { teamName, homeTeam } = team.toJSON();
      return { teamName, homeTeam };
    });
    const leaderBoard = new UtilsLeaderBoard();
    const teams = teamWithMatchesToJSON.map((team: any) => {
      const { teamName, homeTeam } = team;
      return leaderBoard.leaderboardTable(teamName, homeTeam);
    });
    return { payload: teams };
  }
}

export default LeaderBoardService;
