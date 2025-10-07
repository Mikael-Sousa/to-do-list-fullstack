export const messageFunction = (tasks, completed, total) => {
  if (tasks.length === 0) {
    return "Create a task";
  } else if (tasks.length > 0) {
    return "keet up";
  } else if (completed === total) {
    return "Tasks completed";
  }
};
