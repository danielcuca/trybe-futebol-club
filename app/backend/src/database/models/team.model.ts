import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

interface ITeam {
  id: number;
  teamName: string;
}

class Team extends Model<InferAttributes<Team>, InferCreationAttributes<Team>> implements ITeam {
  declare id: number;
  declare teamName: string;
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Team',
    timestamps: false,
    underscored: true,
  },
);

export default Team;
