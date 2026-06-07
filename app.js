const readline = require('readline');
const fs = require('fs');
const http = require('http');


const html = fs.readFileSync('./template/index.html', 'utf-8' )


const server = http.createServer((request, response) => {

    let path = request.url;
    if (path === '/' || path.toLocaleLowerCase() === '/home'){

        response.writeHead(200, {
            'Content-type' : 'text/html',
            'my-header' : 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'you are in home page'));

    }else if(path.toLocaleLowerCase() === '/about'){

        response.writeHead(200, {
            'Content-type' : 'text/html',
            'my-header' : 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'you are in about page'));

    }else if (path.toLocaleLowerCase() === '/contact'){

        response.writeHead(200, {
            'Content-type' : 'text/html',
            'my-header' : 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'you are in contact page'));

    }else{

        response.writeHead(404, {
            'Content-type' : 'text/html',
            'my-header' : 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'error 404'));
        
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started');
});