const express = require("express");
const app = express();
const fs = require('fs');
// Template Engine Support
const {config, engine} = require('express-edge');

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);
config({cache: process.env.NODE_ENV === 'production'});


/**
* Setup Static File
*/

app.use(express.static("public"));


// app.get('/', (req, res) => {
//     let html = fs.readFileSync('/', 'utf-8');
//     res.send(html);
// });

app.get('/articles', (req, res) => {
    let articles = [
        {id: 1, title: 'title one', body: 'lorem ipsum dolor sit amet'},
        {id: 4, title: 'title four', body: 'lorem ipsum dolor sit amet'},
        {id: 3, title: 'title three', body: 'lorem ipsum dolor sit amet'},
        {id: 2, title: 'title two', body: 'lorem ipsum dolor sit amet'}
    ];

    app.get('/articles/:id', (req, res) => {
        let {id: articleId} = req.params;
        res.json({articleId, query: req.query})
    });

    app.post('/articles', (req, res) => {

        res.json({msg:"lorem ipsum"})
    });

    res.json(articles)
});


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/contact', (req, res) => {
    res.render("pages.contact");
});

app.get('/services', (req, res) => {
    res.render("pages.services");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server working at http://localhost:" + port)
});
