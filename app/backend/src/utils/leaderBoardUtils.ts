export interface IHomeTeam {
  id: number;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface ILeaderboard {
  id: number;
  teamName: string;
  homeTeam: IHomeTeam[]
}

export interface LeaderboardDataTeams {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

class utilsLeaderBoard {
  private name: string;
  private totalPoints: number;
  private totalGames: number;
  private totalVictories: number;
  private totalDraws: number;
  private totalLosses: number;
  private goalsFavor: number;
  private goalsOwn: number;
  private efficiency: number;
  private goalsBalance: number;

  constructor() {
    this.name = '';
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.efficiency = 0;
    this.goalsBalance = 0;
  }

  private leaderboardHome(homeTeam: number, awayTeam:number) {
    this.goalsFavor += homeTeam;
    this.goalsOwn += awayTeam;
    if (homeTeam > awayTeam) {
      this.totalVictories += 1;
      this.totalPoints += 3;
    }
    if (homeTeam === awayTeam) {
      this.totalPoints += 1;
      this.totalDraws += 1;
    }
    if (homeTeam < awayTeam) {
      this.totalLosses += 1;
    }
  }

  public leaderboard() {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      efficiency: Number(this.efficiency.toFixed(2)),
      goalsBalance: this.goalsBalance,
    };
  }

  private setEfficiency(): void {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private setGoalBalance(): void {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  public leaderboardTable(name: string, teams: IHomeTeam[]) {
    this.name = name;

    teams.forEach((team) => {
      this.totalGames += 1;
      this.leaderboardHome(team.homeTeamGoals, team.awayTeamGoals);
    });

    this.setEfficiency();
    this.setGoalBalance();
    return this.leaderboard();
  }
}

export default utilsLeaderBoard;
