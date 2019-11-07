process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.env['HTTP_PROXY'] = 'http://127.0.0.1:8888';
process.env['HTTPS_PROXY'] = 'http://127.0.0.1:8888';

const axios = require('axios').default;
const lodash = require('lodash');
const querystring = require('querystring');

function toQueryString(options) {
    const params = lodash.extend({}, options, { key: 'B-vN0Z8ZFAqFwwitDpWnqrKTngAZMRp' });
    return querystring.stringify(params);
}

const queryString = toQueryString({});
const id = 'main_window.title';
const locale = 'ko-KR';
const data = querystring.stringify({
    flag: 'incomplete'
})
axios.post(`https://localise.biz/api/translations/${id}/${locale}/flag`, data, {
    headers: {
        Authorization: `Loco B-vN0Z8ZFAqFwwitDpWnqrKTngAZMRp1X`
    }
}).then(function (response) {
    // handle success
    console.log(response);
}).catch(function (error) {
    // handle error
    console.log(error);
}).finally(function () {
    // always executed
});