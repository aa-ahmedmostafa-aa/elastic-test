require("dotenv").config();


const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const requestLogger = require("./common/middleware/requestLogger");
const app = express();
const PORT = 5000;


require("elastic-apm-node").start({
  serviceName: "elastic-apm-node-example",
  serverUrl: process.env.APM_SERVER_URL || "http://localhost:8200",
  secretToken: process.env.APM_SECRET_TOKEN || "mysecrettoken",
  environment: process.env.NODE_ENV || "local",
  logLevel: 'debug', // Enable debug logging
});



app.use(bodyParser.json());
app.use(requestLogger); // Use the request logger middleware

app.use("/users", userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
