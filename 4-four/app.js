const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('hey');
})

//POST
app.get('/create', async (req, res) => {

    // this is async as it'll take time
    let createdUser = await userModel.create({
        name: "sahib",
        email: "sahib@gmail.com",
        username: "Sahib",
    })

    res.send(createdUser);
})

// GET ALL
app.get('/read', async (req, res) => {

    // this is async as it'll take time
    let users = await userModel.find();

    res.send(users);
})

// PATCH
app.get('/update', async (req, res) => {

    // this is async as it'll take time
    //                          findone                 update                  {new: true}
    let updatedUser = await userModel.findOneAndUpdate({username: "Sahib"}, {name: "Sahibjeet Singh"},{new: true})

    res.send(updatedUser);
})

// GET Single
app.get('/readone', async (req, res) => {

    // this is async as it'll take time
    // find always gives an array, findONe gives an object
    // find returns blank array, findOne returns null, in case it isn't able to find
    let users = await userModel.find({name: "sahib"});

    res.send(users);
})

app.get('/delete', async (req, res) => {

    // this is async as it'll take time
    let users = await userModel.findOneAndDelete({name: "sahib"});

    res.send(users);
})


app.listen(3000)