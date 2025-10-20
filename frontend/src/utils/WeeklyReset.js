Date.prototype.getWeekNumber = function () {
  const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
  const pastDaysOfYear = (this - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export const weeklyReset = (tasks) => {
  const now = new Date();
  const hour = now.getHours();
  const lastReset = localStorage.getItem("lastWeeklyReset");
  const lastResetWeek = lastReset ? new Date(lastReset).getWeekNumber() : null;
  const thisWeek = now.getWeekNumber();

  if (hour >= 6 && lastResetWeek !== thisWeek) {
    const newTasks = tasks.map((task) => ({
      ...task,
      weeklyCount: 0,
    }));

    localStorage.setItem("lastWeeklyReset", now.toISOString());
    return newTasks;
  }

  return tasks;
};
