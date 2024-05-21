

const generateAmiiboJSON = (body) => {
    var amiibos = json2array(body.amiibos);
    var parsed_amiibos = amiibos.map((x) => parseData(x));
    console.log(parsed_amiibos);
}


const parseData = (amiibo) => {
    // console.log(amiibo);
    // console.log(amiibo.key.substring(1,2));
    var character_sub = amiibo.key.substring(0,4);
    var game_series_sub = amiibo.key.substring(0,3);
    var amiibo_series_sub = amiibo.key.substring();
    var img_source = 'icon_' + amiibo.key + '.png';
    return ({...amiibo,img_source})
}


function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push({'name':json[key].name,'key':key.substring(2, 10) + '-' + key.substring(10,18)});
    });
    return result;
}

module.exports = {generateAmiiboJSON};