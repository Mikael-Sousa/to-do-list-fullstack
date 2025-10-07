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

module.exports = {
  validateText,
  validateStatus,
};
