const express = require('express');
const app = express();
const port = 8000;



app.get('/books', (req, res) => {

});

app.put('/books/:index', (req, res) => {

});

app.post('/addbook', (req, res) => {

});

app.listen(port, () => {
    console.log(`server firing 🔥 on a couple cylinders on port ${port}`)
});