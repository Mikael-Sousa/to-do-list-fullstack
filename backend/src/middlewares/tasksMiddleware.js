const validateText = (req, res, next) => {
  const { text } = req.body;

  if (text === undefined) {
    return res.status(400).json({ message: "text is required" });
  }

  if (text.trim() === "") {
    return res.status(400).json({ message: "text cannot be empty" });
  }

  next();
};

const validateStatus = (req, res, next) => {
  const { status } = req.body;

  if (status === undefined) {
    return res.status(400).json({ message: "status is required" });
  }

  if (status.trim() === "") {
    return res.status(400).json({ message: "status cannot be empty" });
  }

  next();
};

const validateDaysPerWeek = (req, res, next) => {
  const { daysPerWeek } = req.body;

  if (daysPerWeek === undefined) {
    return res.status(400).json({ message: "daysPerWeek is required" });
  }

  if (typeof daysPerWeek !== "number") {
    return res.status(400).json({ message: "daysPerWeek must be a number" });
  }

  next();
};

const validateShift = (req, res, next) => {
  const { shift } = req.body;

  if (shift === undefined) {
    return res.status(400).json({ message: "shift is required" });
  }

  if (shift.trim() === "") {
    return res.status(400).json({ message: "shift cannot be empty" });
  }

  next();
};

const validateWeeklyCount = (req, res, next) => {
  const { weeklyCount } = req.body;

  if (weeklyCount === undefined) {
    return res.status(400).json({ message: "weeklyCount is required" });
  }

  if (typeof weeklyCount !== "number") {
    return res.status(400).json({ message: "weeklyCount must be a number" });
  }

  next();
};

module.exports = {
  validateText,
  validateStatus,
  validateDaysPerWeek,
  validateShift,
  validateWeeklyCount,
};