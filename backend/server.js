const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let bookDB = [
    { id: 1, title: 'Severance', author: 'Ling Ma', read: false },
    { id: 2, title: 'Real Life', author: 'Brandon Taylor', read: false },
    { id: 3, title: 'The Color Purple', author: 'Alice Walker', read: false }
];

app.get('/books', (req, res) => {
    res.json(bookDB)
});

app.put('/books/:index', (req, res) => {
    const { index } = req.params
    const book = req.body;
    bookDB[index] = book;
    res.end();
});

app.post('/addbook', (req, res) => {
    const book = req.body;
    bookDB.push(book)
    res.end();
});

app.listen(port, () => {
    console.log(`server firing 🔥 on a couple cylinders on port ${port}`)
});