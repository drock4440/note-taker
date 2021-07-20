const path = require('path');
const router = require('express').Router();


// this tells the application to send the data over to the notes.html file

    router.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })

// this sends the data from the notes
    router.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })

module.exports = router;