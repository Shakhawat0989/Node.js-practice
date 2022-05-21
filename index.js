const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
    res.end('Welcome to my network');
})

server.listen(port,hostname,()=>{
    console.log(`This server is successfully running at http://${hostname}:${port}`);
})