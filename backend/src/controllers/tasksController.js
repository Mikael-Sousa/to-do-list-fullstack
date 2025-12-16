const tasksModel = require("../models/tasksModel");

const getAll = async (req, res) => {
  const userId = req.user.id
  const tasks = await tasksModel.getAll(userId);
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const userId = req.user.id
  const createdTask = await tasksModel.createTask(req.body, userId);
  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id
  await tasksModel.deleteTask(id, userId);
  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id
  await tasksModel.updateTask(id, req.body, userId);
  return res.status(204).json();
};

const resetDailyTasks = async (_req, res) => {
  await tasksModel.resetDailyTasks();
  return res.status(204).end();
};

const resetWeeklyTasks = async (_req, res) => {
  await tasksModel.resetWeeklyTasks();
  return res.status(204).end();
}


module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
  resetDailyTasks,
  resetWeeklyTasks,
};
