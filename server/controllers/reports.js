const geolib = require('geolib');

const getLocationReports = (lat, long, latReport, longReport) => {
    return new Promise((resolve) => {
        const geo = geolib.getDistance(
            {latitude: lat, longitude: long},
            {latitude: latReport, longitude: longReport}
        );
        const geoDifferenceInKM = geo/1000;
        console.log('geo', geoDifferenceInKM);
        return resolve(geoDifferenceInKM);
    })
}

module.exports = getLocationReports;