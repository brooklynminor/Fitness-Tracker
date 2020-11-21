# Fitness-Tracker

## User Story
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.
## Objective

In this assignment a workout tracker is produced. The front end codde is located in the `Public` folder. This assignment required Mongo database, with a Mongoose schema and handle routes with Express, that connect to the client side.

## Algorithms

The `models` folder was created to contain `Workout.js`, which contains the new workout Mongoose-schema.The workout schema passes in the property parameters as a string through date and excercise.
The database creates a index of type and value, which is displayed in a table on Robot 3T. _A visual depiction is added to the assets folder_.

A `server.js` file contains `app.post`, `app.get`, and `app.put` Mongoose methods allow the user to add execrices to a previous workout plan, add new excercises to a new plan, and view and combine weight of multiple excercises on the `stats` page. 

Mongoose models provide several static helper functions for CRUD (Create, Read, Update and Delete) operations. 

```
app.put("/api/workouts/:id", (req, res) => {
```
`app.put` routes the HTTP PUT requests to the specified path with the specified callback functions. `"/api/workouts/:id"` is the path for which the middleware function is invoked. 

```
  Workout.findByIdAndUpdate( req.params.id,  { $push: { exercises: req.body } })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});
```
findByIdAndUpdate function returns a mongoose Query object.findByIdAndUpdate() returns the document as it was before the update was applied. `Workout` is the Mongoose model. 

## Installation

To deploy an application with a MongoDB database to Heroku, A MongoDB Atlas account is required to connect the database to the application.

## License

  [License](https://choosealicense.com/licenses/mit)