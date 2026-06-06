const readline = require('readline');
const fs = require('fs');
const http = require('http');


const html = fs.readFileSync('./template/index.html', 'utf-8' )


const server = http.createServer((request, response) => {
    console.log("a new request received");
    response.end(html);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started');
});