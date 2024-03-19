"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    markTaskAsCompleted(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }
    getAllTasks() {
        return this.tasks;
    }
}
exports.TaskManager = TaskManager;
