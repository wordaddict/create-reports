const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const ReportModel = require('../models/reports');
const ReportService = require('../services/reports');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// get all reports by lat and long
router.get('/reports/:lat/:long', (req, res) => {
  const query = req.params;
  const { lat } = query;
  const { long } = query;
  console.log('query', query);
  ReportService(lat, long)
    .then(finaldata => res.send({
      error: false,
      code: 200,
      message: 'reports succesfully fetched',
      data: finaldata
    }))
    .catch(() => res.send({
      error: false,
      code: 200,
      message: 'reports withing 10km not found',
    }));
});

// Register a report
router.post('/reports', (req, res) => {
  const { body } = req;

  if (!body) {
    return res.send({
      error: true,
      code: 400,
      message: 'provide post body data of title and position',
    });
  }
  if (!body.title) {
    return res.send({
      error: true,
      code: 400,
      message: 'provide title of the reports',
    });
  }

  if (!body.position) {
    return res.send({
      error: true,
      code: 400,
      message: 'provide position of the reports',
    });
  }

  const data = {
    title: body.title,
    time: Date.now(),
    position: body.position
  };

  return ReportModel.create(data)
    .then((doc) => {
      console.log('Reports created successfully', doc);
      return res.send({
        error: false,
        code: 200,
        message: 'reports succesfully created',
      });
    })
    .catch((err) => {
      console.log('Unable to create reports', err);
    });
});

module.exports = router;
