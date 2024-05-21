

const retrieveHelper = async () => {
    const RAW_AMIIBO_DATA = "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/database/amiibo.json";
    var request = require('request');
    const my_request = new Request(RAW_AMIIBO_DATA,
        {
            method: "GET",
        }
    ); 
    var status_code, return_json;
    await fetch(my_request)
        .then(async (res) => {
            status_code = res.status;
            return_json = await res.json();
        });
    return [status_code, return_json];
}

module.exports = {retrieveHelper};