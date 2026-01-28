const workoutModel = require('../models/Workout');
const mongoose = require('mongoose');


const postWorkout = async (req, res) => {
    // get values of stuff below
    const {title, load, reps, additionalNotes} = req.body;

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'please fill in all the fields ', emptyFields})
    }

        try{
            const workout = await workoutModel.create({title, load, reps, additionalNotes});
            return await res.status(200).json(workout);
        } catch (err) {
            return res.status(400).json({err: err.message});
        }
}

module.exports = postWorkout;