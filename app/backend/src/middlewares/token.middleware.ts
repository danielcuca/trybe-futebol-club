import { Request, Response, NextFunction } from 'express';
import Token from '../utils/token';

const tokenValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  const decoded = Token.decodeToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  req.body.user = decoded;
  next();
};

export default tokenValidationMiddleware;
