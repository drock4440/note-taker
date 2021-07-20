// This page establishes our connection to the local host
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// we esablish the routes to our javascript route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// this tells the application what route the server is on
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});