const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', (req, res) => {

});

app.put('/books/:index', (req, res) => {

});

app.post('/addbook', (req, res) => {

});

app.listen(port, () => {
    console.log(`server firing 🔥 on a couple cylinders on port ${port}`)
});