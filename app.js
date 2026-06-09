const readline = require('readline');
const fs = require('fs');
const http = require('http');


const html = fs.readFileSync('./template/index.html', 'utf-8' );
let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
let productListHtml = fs.readFileSync('./template/product-list.html', 'utf-8');

let productHtmlArray = products.map((prod)=>{
    let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
    output = output.replace ('{{%NAME%}}', prod.name);
    output = output.replace ('{{%MODELNAME%}}', prod.modeName);
    output = output.replace ('{{%MODELNO%}}', prod.modelNumber);
    output = output.replace ('{{%SIZE%}}', prod.size);
    output = output.replace ('{{%CAMERA%}}', prod.camera);
    output = output.replace ('{{%PRICE%}}', prod.price);
    output = output.replace ('{{%COLOR%}}', prod.color);

    return output;
})

const server = http.createServer((request, response) => {

    let path = request.url;
    if (path === '/' || path.toLocaleLowerCase() === '/home'){

        response.writeHead(200, {
            'Content-type' : 'text/html',
            'my-header' : 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', productHtmlArray.join('')));

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

    }else if (path.toLocaleLowerCase() === '/products'){
        response.writeHead(200, { 'Content-type': 'text/html' });
response.end(html.replace('{{%CONTENT%}}', productHtmlArray.join('')));
    }
    else{

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