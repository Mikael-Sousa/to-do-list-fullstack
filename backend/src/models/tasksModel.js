const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { text, daysPerWeek, shift } = task;

  const query = "INSERT INTO tasks(text, status, daysPerWeek, shift) VALUES(?, ?, ?, ?)";
  const [createdTask] = await connection.execute(query, [text, "pending", daysPerWeek, shift]);
  return { insertId: createdTask.insertId };
};

const deteteTask = async (id) => {
  const deletedTask = await connection.execute(
    "DELETE FROM tasks WHERE id = ?",
    [id]
  );
  return deletedTask;
};

const updateTask = async (id, task) => {
  const query = "UPDATE tasks SET text = ?, status = ?, daysPerWeek = ?, shift = ? WHERE id = ?";
  const { text, status, daysPerWeek, shift } = task;
  const updatedTask = await connection.execute(query, [text, status, daysPerWeek, shift, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deteteTask,
  updateTask,
};
