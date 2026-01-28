// normal imports
const express = require('express');
const app = express();

// imports the file path
const path = require('path');

// for forms
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// defining static folders
app.use(express.static(path.join(__dirname, 'public')))

// setting ejs as view engine
app.set('view engine', 'ejs');

// routes, anything inside render ('') is a file name that needs to ve in 'views' folder
app.get('/profile/:name/:age', function(req, res){
    const name = req.params.name;
    const age = req.params.age;
    res.send(`hi, ${name}, your age is ${age}`);
});

// port number
app.listen(3000, function(){
    console.log('runnin')
})