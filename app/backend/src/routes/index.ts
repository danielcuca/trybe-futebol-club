import { Router } from 'express';
import teamRouter from './team.router';
import loginRouter from './login.router';
import matchesRouter from './matches.router';

const router = Router();

router.use('/teams', teamRouter);
router.use('/teams/:id', teamRouter);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);

export default router;
