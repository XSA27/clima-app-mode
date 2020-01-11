const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=7a5d17c86a3866080bc7cb839b37310d&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}