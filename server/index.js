const express = require('express');
const app = express();

// base application
app.get('/', () => {
    res.send('we are live people');
});

const port = 3000;
app.listen(port, () => {

});