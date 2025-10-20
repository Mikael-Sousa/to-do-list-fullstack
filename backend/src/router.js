const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post(
  "/tasks",
  tasksMiddleware.validateText,
  tasksMiddleware.validateDaysPerWeek,
  tasksMiddleware.validateShift,
  tasksController.createTask
);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/daily-reset", tasksController.resetDailyTasks);
router.put("/tasks/weekly-reset", tasksController.resetWeeklyTasks)
router.put(
  "/tasks/:id",
  tasksMiddleware.validateText,
  tasksMiddleware.validateStatus,
  tasksMiddleware.validateDaysPerWeek,
  tasksMiddleware.validateShift,
  tasksMiddleware.validateWeeklyCount,
  tasksController.updateTask
);
module.exports = router;
