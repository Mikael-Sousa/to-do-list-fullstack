export const shiftChecker = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 18) {
    return "evening";
  } else if (hour >= 12) {
    return "afternoon";
  } else if (hour >= 6) {
    return "morning";
  } else {
    return "evening";
  }
};
