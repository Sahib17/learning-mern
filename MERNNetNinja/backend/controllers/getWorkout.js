const workoutModel = require('../models/Workout');

const getWorkout = async (req, res) => {
     try {
        const workout = await workoutModel.find({}).sort({createdAt: -1})
        if (workout.length === 0) {
            return res.status(404).json({error: 'no workout found'})
        }
        else{
            return res.status(200).json(workout)
        }
        
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = getWorkout;