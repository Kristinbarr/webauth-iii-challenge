module.exports = department => {
  return (req, res, next) => {
    // check dept in token is the dept passed as an argument?
    if (department === req.user.department) {
      next();
    } else {
      res.status(403).json({ you: "can't touch this" });
    }
  };
};
