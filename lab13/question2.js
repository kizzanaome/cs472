import http from "http";
import fs from 'fs';
const server = http.createServer();

server.on('request', function (req, res) {
    const url = req.url;
    const method = req.method;

    if (url === "/images" && method === "GET") {
        res.writeHead(200, { 'Content-type': 'text/plain' })
        const img = fs.readFile('nice-breeeze.jpg', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.end(data)
            }
        })

    } else if (url === "/pdf" && method === "GET") {
        res.writeHead(200, { 'Content-type': 'application/pdf' })
        fs.readFile('./files/lab4.pdf', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (url === '/about' && method === 'GET') {
        res.setHeader('Content-Type', 'text/plain')
        fs.readFile('./files/text.txt', (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    } else if ((url === '/home' || url === '/') && method === 'GET') {
        res.setHeader('Content-Type', 'text/plain')
        res.write('Welcome to my website')
        res.end();
    } else {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found')
    }

})

server.listen(8000, () => {
    console.log('Running on port 8000');
});