const url = 'http://192.168.43.91:3000/reports'

export default submitReport = (postbody) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(postbody)
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log('Response from posting api', response);
        })
        .catch((err) => {
            console.log('error from posting body data', err);
        });
};