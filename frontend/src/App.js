import { useState } from 'react';

import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './app.css'

const defaultBooks = [
  { id: 1, title: 'Severance', author: 'Ling Ma', read: false },
  { id: 2, title: 'Real Life', author: 'Brandon Taylor', read: false },
  { id: 3, title: 'The Color Purple', author: 'Alice Walker', read: false }
]

function App() {
  const [ booksData, setBooksData ] = useState(defaultBooks)
  const [ newBookData, setNewBookData ] = useState({title: '', author: ''});

  // helper functions
  // updates new book form input to newBookData state variable
  const updateNewBookData = (key) => {
    return (value) => setNewBookData( prev => {
      return { ...prev, [key]: value}
    })
  }

  // updates booksData state variable by adding a new book
  // to the array
  const addBook = () => {
    if (newBookData.title && newBookData.author){
      const addedBook = {...newBookData, read: false, id: booksData.length + 1} 
      setBooksData( prev => {
        return [...prev, addedBook]
      })
      setNewBookData({title: '', author: ''})
    }
  }

  // updates the booksData at a given index by setting a new
  // read boolean value
  const readBook = (index) => {
    let books = [...booksData];
    let singleBook = {...books[index], read: !books[index].read};
    books[index] = singleBook;
    setBooksData(books)

  }

  return (
    <div className="App">
      <BookForm newBookData={newBookData} updateNewBookData={updateNewBookData} addBook={addBook}/>
      <BookList bookData={booksData} readBook={readBook}/>
    </div>
  );
}

export default App;
