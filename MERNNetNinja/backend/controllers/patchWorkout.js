const workoutModel = require('../models/Workout');
const mongoose = require('mongoose');

const patchWorkout = async (req, res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({error: 'not a valid id'})
        }
    const workout = await workoutModel.findOneAndUpdate({_id: req.params.id}, {
        ...req.body
    })
    if (!workout) {
            return res.status(404).json({error: 'workout not found'});
        } else {
            return res.status(200).json(workout)
        }
    } catch (error){
        return res.status(400).json({err: error.message});
    }
}

module.exports = patchWorkout;