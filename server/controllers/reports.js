const geolib = require('geolib');

const getLocationReports = () => {
        const geo = geolib.getDistance(
            {latitude: 51.5103, longitude: 7.49347},
            {latitude: "51° 31' N", longitude: "7° 28' E"}
        );
        const geoDifferenceInKM = geo/1000;
        console.log('geo', geoDifferenceInKM);
    }

module.exports = getLocationReports;