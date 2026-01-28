const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files){
        if (err) {
            console.error(err);
            return res.status(500).send('Something broke');
        }
        console.log(files)
        res.render('index', {files: files})
    })
})

app.get('/files/:filename', function(req, res){
    fs.readdir(`./files`, function(err, files){
        if (err) {
            console.error(err);
            return res.status(500).send('Something broke');
        }
        const filename = req.params.filename;
        const filedata = req.params.filedata;
        fs.readFile(`./files/${filename}`, "utf-8", function(er, filedata){
            res.render('show', {filename: filename, filedata: filedata});
        })
    })
})

app.get('/edit/:filename', function(req, res){
    const filename = req.params.filename;

    res.render('edit', {filename: filename})
})

app.post('/edit', function(req, res){
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect('/');
    })
    console.log(req.body)

})

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('\n')}.txt`, req.body.details, function(err){
        res.redirect('/');
    })
    fs.readdir(`./files`, function(err, files){
        if (err) {
            console.error(err);
            return res.status(500).send('Something broke');
        }
        console.log(req.body)
    })
})

app.listen(3000);