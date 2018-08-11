export default getLocation = () => {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude)
            let dat = {
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            }
            return resolve(dat);
          });
    })
 
}
