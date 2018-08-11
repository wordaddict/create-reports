import getLocation from '../components/geolocation';

export default listReport = () => {
    return new Promise((resolve) => {
        getLocation()
        .then((data) => {
            let position = data;
            console.log('d', position);
            let latitude = position.latitude;
            let longitude = position.longitude;
            let url = `http://192.168.43.91:3000/reports/${latitude}/${longitude}`
            console.log('url', url);
            fetch(url)
                .then(response =>  response.json())
                .then((response) => {
                    //console.log('Response from getting data from api', response.data);
                    return resolve(response.data);
                })
                .catch((err) => {
                    console.log('error from getting data', err);
                });
        })
    })

};