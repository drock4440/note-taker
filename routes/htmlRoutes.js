const express = require('express');
const path = require('path');
const app = express();

// this tells the application to send the data over to the notes.html file
module.exports = function(app) {
    app.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
}
// this sends the data from the notes file to the index.html file
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })