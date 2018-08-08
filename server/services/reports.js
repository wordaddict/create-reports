const ReportModel = require('../models/reports');
const getLocationReports  = require('../controllers/reports');

const ReportService = (lat, long) => {
    return new Promise((resolve) => {
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
                        return resolve(finalData);
                        // return res.send({
                        //     "error": false,
                        //     "code": 200,
                        //     "message": "reports succesfully fetched",
                        //     "data": finalData
                        // })
                    });
            }
        })
        .catch((err) => {
            console.log('unable to return all data', err);
        });
    })
}

module.exports = ReportService;