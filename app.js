process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.env['HTTP_PROXY'] = 'http://127.0.0.1:8888';
process.env['HTTPS_PROXY'] = 'http://127.0.0.1:8888';

const axios = require('axios').default;

axios.get('https://www.google.com').then(function (response) {
    // handle success
    console.log(response);
}).catch(function (error) {
    // handle error
    console.log(error);
}).finally(function () {
    // always executed
});