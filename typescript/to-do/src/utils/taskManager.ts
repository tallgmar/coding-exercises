import { Task } from '../models/task';

export class TaskManager {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    markTaskAsCompleted(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }
}