const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute(
    "SELECT * FROM tasks ORDER BY id DESC"
  );
  return tasks;
};

const createTask = async (task) => {
  const { text, daysPerWeek, shift } = task;
  const query =
    "INSERT INTO tasks(text, status, daysPerWeek, shift, weeklyCount) VALUES(?, ?, ?, ?, ?)";
  const [createdTask] = await connection.execute(query, [
    text,
    "pending",
    daysPerWeek,
    shift,
    0,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const deletedTask = await connection.execute(
    "DELETE FROM tasks WHERE id = ?",
    [id]
  );
  return deletedTask;
};

const updateTask = async (id, task) => {
  const query =
    "UPDATE tasks SET text = ?, status = ?, daysPerWeek = ?, shift = ?, weeklyCount = ? WHERE id = ?";
  const { text, status, daysPerWeek, shift, weeklyCount } = task;
  const updatedTask = await connection.execute(query, [
    text,
    status,
    daysPerWeek,
    shift,
    weeklyCount,
    id,
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
    "UPDATE tasks SET weeklyCount = 0"
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
