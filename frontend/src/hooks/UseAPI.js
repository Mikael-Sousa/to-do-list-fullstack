export const fetchTasks = async () => {
  const res = await fetch("http://localhost:2000/tasks");
  if (!res.ok) {
    throw new Error("Erro ao buscar tasks: " + res.status);
  }
  const ArrayTasks = await res.json();
  return ArrayTasks;
};

export const postTasks = async (text, daysPerWeek, shift) => {
    await fetch("http://localhost:2000/tasks",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text, daysPerWeek, shift}),
      });
  };

export const putTasks = async (id, text, status, daysPerWeek, shift) => {
    await fetch(`http://localhost:2000/tasks/${id}`,
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text, status, daysPerWeek, shift }),
      });
  };

export const deleteTasks = async (id) => {
    await fetch(`http://localhost:2000/tasks/${id}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      });
  };
