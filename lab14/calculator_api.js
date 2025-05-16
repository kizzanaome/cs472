import express from 'express';

const app = express();
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("Calculator Home")
})

//input numbers as parameters

app.get('/addition/:num1/:num2', (req, res) => {
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.json({ results: a + b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
})

app.get('/subtraction/:a/:b', (req, res) => {
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.json({ results: a - b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
})

app.get('/multiplication/:a/:b', (req, res) => {
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.json({ results: a * b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
})

app.get('/division/:a/:b', (req, res) => {
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.json({ results: a / b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }

})

app.get('/modulus/:a/:b', (req, res) => {
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.json({ results: a % b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
})

//input as query params

app.get('/addition', (req, res) => {
    var a = Number(req.query.a)
    var b = Number(req.query.b)

    if (a && b) {
        res.json({ results: a + b });
    }

})

app.get('/subtraction', (req, res) => {
    var a = Number(req.query.a)
    var b = Number(req.query.b)

    if (a && b) {
        res.json({ results: a - b });
    }
})


app.get('/multiplication', (req, res) => {
    var a = Number(req.query.a)
    var b = Number(req.query.b)

    if (a && b) {
        res.json({ results: a * b });
    }
})

app.get('/division', (req, res) => {
    var a = Number(req.query.a)
    var b = Number(req.query.b)

    if (a && b) {
        res.json({ results: a / b });
    }
})

app.get('/modulus', (req, res) => {
    var a = Number(req.query.a)
    var b = Number(req.query.b)

    if (a && b) {
        res.json({ results: a % b });
    }
})


//parameters in body as json  or url encoded
app.post('/addition', (req, res) => {
    var a = Number(req.body.a);
    var b = Number(req.body.b);
    if (!isNaN(a) && !isNaN(b)) {
        res.json({ results: a + b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
})



app.post('/subtraction', (req, res) => {
    var a = Number(req.body.a)
    var b = Number(req.body.b)

    if (a && b) {
        res.json({ results: a - b });
    }

})

app.post('/multiplication', (req, res) => {
    var a = Number(req.body.a)
    var b = Number(req.body.b)

    if (a && b) {
        res.json({ results: a * b });
    }

})


app.post('/division', express.urlencoded({ extended: true }), (req, res) => {
    var a = Number(req.body.a)
    var b = Number(req.body.b)

    if (a && b) {
        res.json({ results: a / b });
    }
})


app.post('/modulus', express.urlencoded({ extended: true }), (req, res) => {
    var a = Number(req.body.a)
    var b = Number(req.body.b)

    if (a && b) {
        res.json({ results: a % b });
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

