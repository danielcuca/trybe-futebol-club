import User from '../database/models/user.model';

class UserModel {
  public static async getUser(email: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    return user.dataValues;
  }
}

export default UserModel;
