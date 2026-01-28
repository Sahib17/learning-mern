const express = require('express');
const {
    postWorkout,
    patchWorkout,
    getWorkout,
    getOneWorkout,
    deleteWorkout,
} = require('../controllers/index')
const router = express.Router();

// GET all
router.get('/', getWorkout)

// POST
router.post('/', postWorkout)

// GET single
router.get('/:id', getOneWorkout);

// PATCH
router.patch('/:id', patchWorkout);

// DELETE
router.delete('/:id', deleteWorkout);

module.exports = router;