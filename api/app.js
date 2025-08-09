const express = require("express");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();

app.post("/", (req, res) => {
  res.redirect(
    "http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance"
  );
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
module.exports.handler = serverless(app);
