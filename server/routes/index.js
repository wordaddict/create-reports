const express = require('express');
const route = express.Router();

// get all reports
route.get('/reports', (req, res) => {
    return res.send({
        "error": false,
        "code": 200,
        "message": "reports succesfully fetched",
        "data": data
    })
})

// get reports by Id