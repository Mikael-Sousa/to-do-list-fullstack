const connection = require("./connection");

const getAll = async (userId) => {
  const [tasks] = await connection.execute(
    'SELECT * FROM tasks WHERE user_id = ? ORDER BY id DESC',
    [userId]
  );
  return tasks;
};

const createTask = async (task, userId) => {
  const { text, daysPerWeek, shift } = task;
  const query =
    `INSERT INTO tasks(text, status, days_per_week, shift, weekly_count, user_id) 
    VALUES(?, ?, ?, ?, ?, ?)`;
  const [createdTask] = await connection.execute(query, [
    text,
    "pending",
    daysPerWeek,
    shift,
    0,
    userId
  ]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id, userId) => {
  const deletedTask = await connection.execute(
    'DELETE FROM tasks WHERE id = ? AND user_id = ?',
    [id, userId]
  );
  return deletedTask;
};

const updateTask = async (id, task, userId) => {
 const query = `
    UPDATE tasks 
    SET text = ?, status = ?, days_per_week = ?, shift = ?, weekly_count = ?
    WHERE id = ? AND user_id = ?
  `;
  const { text, status, daysPerWeek, shift, weeklyCount } = task;
  const updatedTask = await connection.execute(query, [
    text,
    status,
    daysPerWeek,
    shift,
    weeklyCount,
    id,
    userId
  ]);
  return updatedTask;
};

const resetDailyTasks = async () => {
  const resetedTasks = await connection.execute(
    "UPDATE tasks SET status = 'pending' WHERE status IN ('completed','dayOff')"
  );
  return resetedTasks;
};

const resetWeeklyTasks = async () => {
  const result = await connection.execute(
    "UPDATE tasks SET weekly_count = 0"
  );
  return result;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
  resetDailyTasks,
  resetWeeklyTasks,
};
