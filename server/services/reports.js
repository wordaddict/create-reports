const ReportModel = require('../models/reports');
const getLocationReports = require('../controllers/reports');
const { mongoose } = require('../config/index');

const ReportService = (lat, long) => new Promise((resolve) => {
  ReportModel.find()
    .then((doc) => {
      const finalData = [];
      for (let i = 0; i < doc.length; i += 1) {
        const Datalat = doc[i].position.latitude;
        const Datalong = doc[i].position.longitude;
        getLocationReports(lat, long, Datalat, Datalong)
          .then((data) => {
            if (data <= 10) {
              const body = {
                title: doc[i].title,
                time: doc[i].createdAt,
                position: {
                  latitude: doc[i].position.latitude,
                  longitude: doc[i].position.longitude
                }
              };
              finalData.push(body);
            }
          });
      }
      return resolve(finalData);
    })
    .catch((err) => {
      console.log('unable to return all data', err);
    });
});

module.exports = ReportService;
