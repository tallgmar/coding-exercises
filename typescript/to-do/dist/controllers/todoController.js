"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markTaskAsCompleted = exports.deleteTask = exports.addTask = exports.getAllTasks = void 0;
const taskManager_1 = require("../utils/taskManager");
const idGenerator_1 = require("../utils/idGenerator");
const taskManager = new taskManager_1.TaskManager();
const getAllTasks = (req, res) => {
    const tasks = taskManager.getAllTasks();
    res.json(tasks);
};
exports.getAllTasks = getAllTasks;
const addTask = (req, res) => {
    const { title } = req.body;
    const task = {
        id: (0, idGenerator_1.generateId)(),
        title,
        completed: false
    };
    taskManager.addTask(task);
    res.json({ message: 'Task added successfully', task });
};
exports.addTask = addTask;
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    taskManager.deleteTask(id);
    res.json({ message: 'Task deleted successfully' });
};
exports.deleteTask = deleteTask;
const markTaskAsCompleted = (req, res) => {
    const id = parseInt(req.params.id);
    taskManager.markTaskAsCompleted(id);
    res.json({ message: 'Task marked as completed successfully' });
};
exports.markTaskAsCompleted = markTaskAsCompleted;
