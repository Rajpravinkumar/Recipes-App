const notFound = (req, res, next) => {
  res.json({ method: "Route not found" });
};

module.exports = notFound;
