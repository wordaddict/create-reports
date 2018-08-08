const express = require('express');
const app = express();
const router = require('./routes/index');

app.use('/', router);

// base application
app.get('/', (req, res) => {
    res.send('welcome to the view reports application');
});

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});