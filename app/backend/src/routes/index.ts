import { Router } from 'express';
import teamRouter from './team.router';
import loginRouter from './login.router';
// a

const router = Router();

router.use('/teams', teamRouter);
router.use('/teams/:id', teamRouter);
router.use('/login', loginRouter);

export default router;
