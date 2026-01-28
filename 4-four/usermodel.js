const mongoose = require('mongoose');

// Connect to Mongo
mongoose.connect(`mongodb://localhost:27017/mongopractice`);

// Schema, CRUD actions will happen on this
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
})

// The model name will always be plural, user -> users
module.exports = mongoose.model('user', userSchema);