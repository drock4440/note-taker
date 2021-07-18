const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);


app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});