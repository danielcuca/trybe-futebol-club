import * as jwt from 'jsonwebtoken';

interface JwtPayload {
  expiresIn: string;
  algorithm: string;
}

export default class Token {
  static secret: string = process.env.JWT_SECRET || 'jwt_secret';
  static options: jwt.SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

  static generateToken(payload: object): string {
    return jwt.sign(payload, Token.secret, Token.options);
  }

  static decodeToken(token: string): JwtPayload | null {
    try {
      const payload = jwt.verify(token, Token.secret) as JwtPayload;
      return payload;
    } catch (error) {
      return null;
    }
  }
}
