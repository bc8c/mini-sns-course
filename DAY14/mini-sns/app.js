const chalk = require("chalk");
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Feed = require("./models/feed");

app.set("view engine", "ejs"); // EJS setup
app.set("views", path.join(__dirname, "views")); // Set the views directory

app.use(express.urlencoded({ extended: true }));
const session = require("express-session");
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 5,
    }, // 5 minutes
  })
);

app.use(morgan("common"));

app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
// app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB (only once when the server starts)
mongoose
  .connect("mongodb://localhost:27017/my_first_db")
  .then(() =>
    console.log(chalk.bgHex("#b2ebf2").black.bold(" 🌤️ MongoDB Connected 🌤️ "))
  )
  .catch(console.error);

app.get("/", (req, res) => {
  res.render("index", { username: req.session.username });
});

app.get("/write", (req, res) => {
  if (req.session.username) {
    res.render("write");
  } else {
    res.redirect("/");
  }
});

app.get("/posts", async (req, res) => {
  if (!req.session.username) {
    return res.redirect("/");
  }

  try {
    const posts = await Feed.find({ author: req.session.username }).sort({
      createdAt: -1,
    }); // sort by createdAt in descending order.
    res.render("posts", { posts });
  } catch (error) {
    console.error("Error loading posts", err);
    res.status(500).send("Error loading posts");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Mock authentication logic
  const mockUsername = "Tom";
  const mockPassword = "123456";

  if (username === mockUsername && password === mockPassword) {
    req.session.username = username;
    res.redirect("/posts");
  } else {
    res.send("Login failed!");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

app.post("/write", async (req, res) => {
  const { content } = req.body;

  if (!req.session.username) {
    return res.redirect("/");
  }

  const newFeed = new Feed({
    content,
    author: req.session.username,
  });

  // Save the new feed to the database
  // and redirect to the posts page
  await newFeed
    .save()
    .then(() => {
      console.log("Feed saved successfully");
      res.redirect("/posts");
    })
    .catch((err) => {
      console.error("Error saving feed:", err);
      res.status(500).send("Error saving feed");
    });
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

// Sample code to create a new feed
// const sampleFeed = new Feed({
//   content: "This is my first SNS feed!",
//   author: "TEST_USER",
// });

// sampleFeed
//   .save()
//   .then(() => console.log("✅ Test fed saved"))
//   .then(() => {
//     Feed.find().then((feeds) => {
//       console.log(feeds);
//     });
//   })
//   .catch((err) => console.error("❌ Error:", err));
