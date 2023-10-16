import teamModel from '../models/team.model';
import UtilsLeaderBoard from '../utils/leaderBoardUtils';

class LeaderBoardService {
  public static async getLeaderBoardHome() {
    const teamWithMatches = await teamModel.getLeaderboard();

    const teams = teamWithMatches.map((team: any) => {
      const leaderBoard = new UtilsLeaderBoard();
      const formatedLeaderBoard = leaderBoard.leaderboardTable(team.teamName, team.homeTeam);
      return formatedLeaderBoard;
    });

    const sortedTeams = teams
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalPoints - a.totalPoints);
    return { payload: sortedTeams };
  }
}

export default LeaderBoardService;
