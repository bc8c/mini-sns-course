const chalk = require("chalk");

const express = require("express");
const app = express();

const path = require("path");
const morgan = require("morgan");

app.use(morgan("common"));

app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/write", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "write.html"));
});

app.get("/posts", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "posts.html"));
});

app.listen(3000, () => {
  console.log(
    chalk.bgHex("#ff69b4").white.bold(" 🎉 EXPRESS SERVER STARTED 🎉 ")
  );
  console.log(
    chalk.green("Running at: ") + chalk.cyan("http://localhost:3000")
  );
  console.log(chalk.gray("Press Ctrl+C to stop the server."));
});
