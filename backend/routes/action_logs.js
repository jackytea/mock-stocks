import express from 'express';

import { getActionLogs } from '../controllers/action_logs.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', auth, getActionLogs);

export default router;
