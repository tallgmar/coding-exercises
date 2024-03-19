import express from 'express';
import { addTask, getAllTasks } from '../controllers/todoController';

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/addtask', addTask);

export default router;
