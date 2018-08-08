const geolib = require('geolib');

const getLocationReports = (lat, long, latReport, longReport) => new Promise((resolve) => {
  const geo = geolib.getDistance(
    { latitude: lat, longitude: long },
    { latitude: latReport, longitude: longReport }
  );
  const geoDifferenceInKM = geo / 1000;
  return resolve(geoDifferenceInKM);
});

module.exports = getLocationReports;
