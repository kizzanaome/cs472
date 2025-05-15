import http from "http"
import fs from "fs"
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync('./files/index.html', 'utf8');
    var message = 'I am using readFileSync to read file!';
    html = html.replace('{Message}', message);
    res.end(html);
}).listen(1337, '127.0.0.1', () => {
    console.log('Running on port 1337');
});

//practising readfile
let server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile('nice-breeeze.jpg', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});
server.listen(8000);



//readfile
import fs from 'fs/promises';
try {
    const content = await fs.readFile('./files/question2.js', 'utf8');
    console.log('Module content:', content);
} catch (err) {
    console.error('Failed to read module file:', err);
}


//readableStream

const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    console.log('Receivedchunk: ', chunk);
});
// Handling the end of the stream
readableStream.on('end', () => {
    console.log('Finished reading the file.');
});
// Handling errors 
readableStream.on('error', (err) => {
console.error('Error reading the file:', err);
})


/**
fs.readFileSync() reads the entire file synchronously, blocking the event loop until the operation completes. It's best suited for small files or startup tasks. That means it executes all synchronous operations first, followed by process.nextTick() callbacks, and then the rest of the event loop phases.

fs.readFile() reads the file asynchronously using a callback, allowing other operations to continue executing while the file is being read.

fs.promises.readFile() also reads the file asynchronously, but returns a Promise, enabling the use of async/await for cleaner and more modern asynchronous code without nested callbacks.

fs.createReadStream() reads a file as a stream in chunks, making it ideal for handling very large files efficiently without loading the entire content into memory
 */