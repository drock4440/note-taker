const fs = require('fs');
const data = require('../db/db.json');
const router = require('express').Router();


    function write(notes) {
        notes = JSON.stringify(notes);
        fs.writeFileSync('./db/db.json', notes, function (err) {
            if (err) {
                return (err)
            }
        })
    
}

    router.get('/notes', function (req, res) {
        res.json(data);
    });

    router.post('/notes', function (req, res) {
        if (data.length == 0) {
            req.body.id = '0';

        } else {
            req.body.id = JSON.stringify(JSON.parse(data[data.length - 1].id) + 1);

        }


        data.push(req.body);

        write(data);

        res.json(req.body);

    });

    router.delete('/notes/:id', function (req, res) {
        let id = req.params.id.toString();
        for (i = 0; i < data.length; i++) {
            if (data[i].id = id) {
                res.send(data[i]);
                data.splice(i, 2);
                break;
            }
        }
        write(data)
    });

module.exports = router;
