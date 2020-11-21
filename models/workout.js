const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Workout = new Schema ({
   
    day: { type: Date, default: Date.now },
    exercises: [
      {
        type: { type: String,  required: true},
        name: { type: String, required: true },
        duration: {type: Number, required: true},
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      }
    ]
    // YOUR CODE HERE - SCHEMA
});

module.exports = mongoose.model('Workout', Workout);

// {
    
// //   }