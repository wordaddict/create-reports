const express = require('express');
const router = express.Router();

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

});

module.exports = router;