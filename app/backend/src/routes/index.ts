import { Router } from 'express';
import teamRouter from './team.router';

const router = Router();

router.use('/teams', teamRouter);
router.use('/teams/:id', teamRouter);

export default router;
