export const fetchTasks = async () => {
  const res = await fetch("http://localhost:2000/tasks");
  if (!res.ok) {
    throw new Error("Erro ao buscar tasks: " + res.status);
  }
  const ArrayTasks = await res.json();
  return ArrayTasks;
};

export const postTasks = async (text) => {
    await fetch("http://localhost:2000/tasks",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text}),
      });
  };

export const putTasks = async (id, text, status) => {
    await fetch(`http://localhost:2000/tasks/${id}`,
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text, status }),
      });
  };

export const deleteTasks = async (id) => {
    await fetch(`http://localhost:2000/tasks/${id}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      });
      fetchTasks()
  };
