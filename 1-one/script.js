// video 4
// 18:28

const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){
    console.log(req.method, req.url)
    next();
})





app.get('/', function (req, res) {
    res.send ('Hello Worlllld!!')
})

app.get('/hey', function (req, res) {
    res.send ('hiiiiiii!!!')
})




app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);