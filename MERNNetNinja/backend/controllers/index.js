const deleteWorkout = require('./deleteWorkout');
const getOneWorkout = require('./getOneWorkout');
const getWorkout = require('./getWorkout');
const patchWorkout = require('./patchWorkout');
const postWorkout = require('./postWorkout');

module.exports = {
    postWorkout,
    patchWorkout,
    getWorkout,
    getOneWorkout,
    deleteWorkout,
};