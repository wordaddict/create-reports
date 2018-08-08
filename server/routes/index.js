const express = require('express');
const router = express.Router();
const { mongoose } = require("../config/index");
const ReportModel = require('../models/reports');

// get all reports by lat and long
router.get('/reports/:lat/:long', (req, res) => {
    return res.send({
        "error": false,
        "code": 200,
        "message": "reports succesfully fetched",
        //"data": data
    })
})

// Register a report
router.post('/reports', (req, res) => {
    const body = req.body;
    const data = {
        title: body.title,
        time: Date.now(),
        position: body.position
    }

    ReportModel.create(data)
        .then((data) => {
            console.log('Reports created successfully', data);
        })
        .catch((err) => {
            console.log('Unable to create reports', err);
        });
    
        return res.send({
            "error": false,
            "code": 200,
            "message": "reports succesfully fetched",
        })
});

module.exports = router;