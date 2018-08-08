const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const { mongoose } = require("../config/index");
const ReportModel = require('../models/reports');
const getLocationReports  = require('../controllers/reports');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// get all reports by lat and long
router.get('/reports/:lat/:long', (req, res) => {
    const query = req.params;
    const lat = query.lat;
    const long = query.long;
    console.log('query', query);
    ReportModel.find()
        .then((doc) => {
            const finalData = [];
            console.log('The data returned', doc);
            for (i = 0; i < doc.length; i ++) {
                let Datalat = doc[i].position.latitude;
                let Datalong = doc[i].position.longitude;
                return getLocationReports(lat, long, Datalat, Datalong)
                    .then((data) => {
                        if (data <= 10){
                            const body = {
                                title: doc[i].title,
                                time: doc[i].createdAt,
                                position: {
                                    latitude: doc[i].position.latitude,
                                    longitude: doc[i].position.longitude
                                }
                            }
                            finalData.push(body);
                        }
                        return res.send({
                            "error": false,
                            "code": 200,
                            "message": "reports succesfully fetched",
                            "data": finalData
                        })
                    });
            }
        })
        .catch((err) => {
            console.log('unable to return all data', err);
        });
})

// Register a report
router.post('/reports', (req, res) => {
    const body = req.body;

    if (!body) {
        return res.send({
            "error": true,
            "code": 400,
            "message": "provide post body data of title and position",
        });
    }
    if (!body.title) {
        return res.send({
            "error": true,
            "code": 400,
            "message": "provide title of the reports",
        });  
    }

    if (!body.position) {
        return res.send({
            "error": true,
            "code": 400,
            "message": "provide position of the reports",
        });  
    }

    const data = {
        title: body.title,
        time: Date.now(),
        position: body.position
    }

    ReportModel.create(data)
        .then((data) => {
            console.log('Reports created successfully', data);
            return res.send({
                "error": false,
                "code": 200,
                "message": "reports succesfully created",
            })
        })
        .catch((err) => {
            console.log('Unable to create reports', err);
        });
});

module.exports = router;