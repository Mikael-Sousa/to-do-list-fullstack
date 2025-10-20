export const fetchTasks = async () => {
  const res = await fetch("http://localhost:2000/tasks");
  const ArrayTasks = await res.json();
  return ArrayTasks;
};

export const postTasks = async (text, daysPerWeek, shift) => {
  await fetch("http://localhost:2000/tasks", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, daysPerWeek, shift }),
  });
};

export const putTasks = async (id, text, status, daysPerWeek, shift, weeklyCount) => {
  await fetch(`http://localhost:2000/tasks/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, status, daysPerWeek, shift, weeklyCount }),
  });
};

export const deleteTasks = async (id) => {
  await fetch(`http://localhost:2000/tasks/${id}`, {
    method: "delete",
  });
};

export const resetDailyTasks = async () => {
  await fetch("http://localhost:2000/tasks/daily-reset", {
    method: "put",
  });
};

export const resetWeeklyTasks = async () => {
  await fetch("http://localhost:2000/tasks/weekly-reset", {
    method: "put",
  });
};
