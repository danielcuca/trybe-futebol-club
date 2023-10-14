import * as Bcrypt from 'bcryptjs';
// import { ServiceResponse } from '../Interfaces/ITeamService';
import UserModel from '../models/user.model';
import Token from '../utils/token';

class loginService {
  public static async login(body: { email: string, password: string }) {
    const { email, password } = body;
    const user = await UserModel.getUser(email);
    console.log(user);
    if (!user) {
      return { type: 'error', payload: { message: 'Invalid email or password' } };
    }
    const isValidPassword = await Bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return { type: 'error', payload: { message: 'Invalid email or password' } };
    }
    const token = Token.generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    });
    return { type: null, payload: { token } };
  }
}

export default loginService;
