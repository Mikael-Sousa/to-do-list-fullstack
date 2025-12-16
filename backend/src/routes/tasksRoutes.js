const express = require("express");
const tasksController = require("../controllers/tasksController");
const tasksMiddleware = require("../middlewares/tasksMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware)

router.get("/", tasksController.getAll);
router.post(
  "/post",
  tasksMiddleware.validateText,
  tasksMiddleware.validateDaysPerWeek,
  tasksMiddleware.validateShift,
  tasksController.createTask
);
router.delete("/:id", tasksController.deleteTask);
router.put("/daily-reset", tasksController.resetDailyTasks);
router.put("/weekly-reset", tasksController.resetWeeklyTasks)
router.put(
  "/:id",
  tasksMiddleware.validateText,
  tasksMiddleware.validateStatus,
  tasksMiddleware.validateDaysPerWeek,
  tasksMiddleware.validateShift,
  tasksMiddleware.validateWeeklyCount,
  tasksController.updateTask
);
module.exports = router;
