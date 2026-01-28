# MERN Stack
- Mongo DBa
- Express
- React
- Node

## Start with
Create `server.js`, then:
```npm
npm init -y
```
## Dependencies and Dev Dependencies
These are the npm modules you might want to install for a MERN project 📌 <br>
Dependencies
```npm
express
mongoose
nodemon
react
cors
jsonwebtoken
bcrypt
```
idk
```
cookie-parser
ejs
```
DevDependencies:
```npm
nodemon
concurrency
```
Syntax for Dev Dependencies:
```npm
npm i PackageName --save-dev
```

### Dev Dependencies
These are the stuff used during development, not used during deployment.

# Backend

Backend has 2 servers:
- Application Server (Node.js)
- Database Server (MongoDB)

# MongoDB

Database -> Collections -> Document

CODE                ->  DATABASE
-------------------------------------------
mongoose.connect    ->  database create
model create        ->  collection create
CREATE code         ->  document create

## Debunnking the ID
say the ID - `695c7ab7 7b10fe 34f5 bd6e83`
- 695c7ab7 (4 bytes) -> Unix in Hex
- 7b10fe (3 bytes) -> Machine Identifier
- 34f5 (2 bytes) -> Process ID
- bd6e83 (3 bytes) ->Random number

## .env
```
require('dotenv').config();
```
```
process.env.VAR
```

## Connect to MongoDB

```js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log(`connected to db and listening to port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })
```

### Checking if it is a valid mongoose ID
```js
!mongoose.Types.ObjectId.isValid(req.params.id);
```

## Bcrypt
```
app.get('/', function(req, res) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("password", salt, function(err, hash) {
            console.log(hash);
        });
    });
})
```

Comparing
```
bcrypt.compare('password', '$2b$10$rRSlPbe1qDibCX/kUEkE/.9bbciqJaTlXs8opblWaXR2tx1Gz2iJq', function(err, result) {
    if(result == true){
        res.send('correct');
    }
    else{
        res.send('not correct')
    }
});
```

last stop at 14:35 vid 12































Might use later idk? Stay tuned
```js
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
```

# Learnt From
- <a href='https://www.youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH'>Sheriyans Coding Shool</a>
- <a href='https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE'>Net Ninja</a>

See last part of it Later

https://chatgpt.com/share/6954ec3b-95d8-8003-bcc3-a5e8eb3dee26