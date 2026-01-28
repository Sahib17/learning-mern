require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// Express App
const app = express();

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/workout', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`);
});

mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log(`connected to db and listening to port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })