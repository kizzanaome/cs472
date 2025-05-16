
import express from 'express';
import url from 'url'
import path from 'path'

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = 8000;

app.get('/images', (req, res) => {
    const imagePath = path.join(__dirname, 'public/images', 'nice-breeze.jpg');
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(500).send('Error loading image');
        }
    });
});


app.get('/pdf', (req, res) => {
    const pdfPath = path.join(__dirname, 'public/files', 'lab4.pdf');
    res.sendFile(pdfPath, (err) => {
        if (err) {
            res.status(500).send('Error loading PDF');
        }
    });
});


app.get('/about', (req, res) => {
    const aboutPath = path.join(__dirname, 'public/files', 'text.txt');
    res.sendFile(aboutPath, (err) => {
        if (err) {
            res.status(500).send('Error loading text file');
        }
    });
})

app.get(['/home', '/'], (req, res) => {
    res.type('text/plain');
    res.send('Welcome to my website');
});


app.use((req, res) => {
    res.status(404).type('text/plain').send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});