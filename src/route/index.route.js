import express from 'express';
import empRouter from './employee.route';

const router = express.Router();

router.use('/employee', empRouter);

export default router;