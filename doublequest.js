var http = require('http');
var fs = require('fs');
var url = require('url');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM(`<!DOCTYPE html>`).window;
var app = http. createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    if(_url == '/'){
        _url = '/main.html';
    }
    if(queryData.type == 'hira') {
        _url = '/hira.html';
    }
    if(queryData.type == 'gata') {
        _url = '/gata.html';
    }
    if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
});
app.listen(158);