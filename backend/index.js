


const express=require('express');
http=require('http');
const hostname='localhost';
const port = 8080;
const app=express();

app.get("/",(req, res) => {
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is a test</h1></body><html>');
});

app.get("/retrieve_amiibo_list", async (req, res)=> {
    const retrieve_api = require('./helpers/retrieveHelper');
    
    var status_code, body;
    [status_code, body] = await(retrieve_api.retrieveHelper());
    console.log(`statuscode: ${status_code}`);
    res.setHeader('Content-Type', 'application/json');
    res.json(body);
});

app.get("/update_amiibo_list", async (req, res)=> {
    const retrieve_api = require('./helpers/retrieveHelper');
    const amiibo_parse = require('./helpers/amiiboParserHelper');    
    var status_code, body;
    // body variable contains json of unparsed amiibo list.
    [status_code, body] = await(retrieve_api.retrieveHelper());
    console.log(`statuscode: ${status_code}`);
    res.setHeader('Content-Type', 'application/json');

    amiibo_parse.generateAmiiboJSON(body);
    res.json(body);
});


const sample_server = http.createServer(app);

sample_server.listen(port, hostname, () => {
    console.log(`server running on port ${port} on ${hostname}`);

});
