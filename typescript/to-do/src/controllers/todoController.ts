import { Request, Response } from 'express';
import { Task } from '../models/task';
import { TaskManager } from '../utils/taskManager';
import { generateId } from '../utils/idGenerator';

const taskManager = new TaskManager();

export const getAllTasks = (req: Request, res: Response) => {
    const tasks = taskManager.getAllTasks();
    res.json(tasks);
};

export const addTask = (req: Request, res: Response) => {
    const { title }: { title: string } = req.body;
    const task: Task = {
        id: generateId(),
        title,
        completed: false
    };
    taskManager.addTask(task);
    res.json({ message: 'Task added successfully', task });
};

export const deleteTask = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    taskManager.deleteTask(id);
    res.json({ message: 'Task deleted successfully' });
};

export const markTaskAsCompleted = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    taskManager.markTaskAsCompleted(id);
    res.json({ message: 'Task marked as completed successfully' });
};