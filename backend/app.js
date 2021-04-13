const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let bookData = [
    { id: 1, title: 'Severance', author: 'Ling Ma', read: false },
    { id: 2, title: 'Real Life', author: 'Brandon Taylor', read: false },
    { id: 3, title: 'The Color Purple', author: 'Alice Walker', read: false }
  ]

app.get('/', (req, res) => {
    res.json(bookData)
});

app.post('/books', (req, res) => {
    const book = req.body;
    bookData.push(book)
    res.end();
})

app.listen(port, () => {
    console.log(`server firing 🔥 on a couple cylinders on port ${port}`)
});