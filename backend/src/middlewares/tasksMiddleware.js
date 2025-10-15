const validateText = (req, res, next) => {
  const { body } = req;

  if (body.text === undefined) {
    return res.status(400).json({ message: "text is undefined" });
  }

  if (body.text === "") {
    return res.status(400).json({ message: "text is empty" });
  }

  next();
};

const validateStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: "status is undefined" });
  }

  if (body.status === "") {
    return res.status(400).json({ message: "status is empty" });
  }

  next();
};

const validateDaysPerWeek = (req, res, next) => {
  const { body } = req;

  if (body.daysPerWeek === undefined) {
    return res.status(400).json({ message: "daysPerWeek is undefined" });
  }

  if (body.daysPerWeek === "") {
    return res.status(400).json({ message: "daysPerWeek is empty" });
  }

  next();
};

const validateShift = (req, res, next) => {
  const { body } = req;

  if (body.shift === undefined) {
    return res.status(400).json({ message: "shift is undefined" });
  }

  if (body.shift === "") {
    return res.status(400).json({ message: "shift is empty" });
  }

  next();
};

module.exports = {
  validateText,
  validateStatus,
  validateDaysPerWeek,
  validateShift,
};
