// export default getLocation = () => {
//     const location = navigator.geolocation.getCurrentPosition()
//     let latitude = location.coords.latitude;
//     let longitude = location.coords.longitude;
//     return {
//         latitude,
//         longitude
//     }
// };

export default getLocation = () => {
    return navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    return {
        latitude, longitude
    }
}