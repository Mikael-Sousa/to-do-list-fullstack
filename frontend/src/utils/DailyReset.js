export const dailyReset = (tasks) => {
  const now = new Date();
  const hour =  now.getHours();
  const today = now.toISOString().split("T")[0];
  const lastReset = localStorage.getItem("lastReset");

if (hour >= 6 && lastReset !== today) {
    const newTasks = tasks.map((task) => ({
      ...task,
      status: "pending",
    }));

    localStorage.setItem("lastReset", today);
    return newTasks;
  }
  return tasks;
};
