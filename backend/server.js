const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

// middleware
// allows for requests to be made from localhost 3000
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
// adds ability to send data from request and accessed in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', (req, res) => {

});

app.post('/books', (req, res) => {

});

app.put('/books/:index', (req, res) => {

});


app.listen(port, () => {
    console.log(`server firing 🔥 on a couple cylinders on port ${port}`)
});