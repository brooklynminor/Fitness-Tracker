const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const  db = require("./models");
//do I need this???
const mongojs = require('mongojs')
const db = mongojs(connectionString, [collections])

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout_db',
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.post("/api/workouts", (req, res) => {
  db.workout.create( req.body )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

app.get("/api/workouts", (req, res) => {
  db.workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/api/workouts/range", (req, res) => {
  db.workout.find({ Date })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});
// routes
app.use(require("./routes/api.js"));
//fat arrow notation
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});