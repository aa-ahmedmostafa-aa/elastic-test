const winston = require("winston");
const { ElasticsearchTransport } = require("winston-elasticsearch");
require("winston-daily-rotate-file");

const esTransportOpts = {
  level: "info",
  index: "logs",
  clientOpts: {
    node: process.env.ELK_HOST, // Change to your Elasticsearch endpoint
    auth: {
      username: process.env.ELK_USERNAME || "elastic", // Elasticsearch username
      password: process.env.ELK_PASSWORD || "Ahmed@1234", // Elasticsearch password
    },
  },
};

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.colorize(),
    winston.format.json({
      space: 2,
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new ElasticsearchTransport(esTransportOpts),
    new winston.transports.DailyRotateFile({
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

module.exports = logger;
