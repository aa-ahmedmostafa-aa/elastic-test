const logger = require("../logger");

const requestLogger = (req, res, next) => {
  // Log the request details
  logger.info("Incoming request", {
    url: req.url,
    method: req.method,
    query: req.query,
  });
  next();
};

module.exports = requestLogger;
