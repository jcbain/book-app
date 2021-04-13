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
  const [ appBookData, setAppBookData ] = useState(defaultBooks)
  const [ newBookData, setNewBookData ] = useState({title: '', author: ''});


  const updateNewBookData = (key) => {
    return (value) => setNewBookData( prev => {
      return { ...prev, [key]: value}
    })
  }

  const addBook = () => {
    if (newBookData.title && newBookData.author){
      const addedBook = {...newBookData, read: false, id: appBookData.length + 1} 
      setAppBookData( prev => {
        return [...prev, addedBook]
      })
      setNewBookData({title: '', author: ''})

  }
}

  const readBook = (index) => {
    let books = [...appBookData];
    let singleBook = {...books[index], read: !books[index].read};
    books[index] = singleBook;
    setAppBookData(books)

  }

  return (
    <div className="App">
      <BookForm newBookData={newBookData} updateNewBookData={updateNewBookData} addBook={addBook}/>
      <BookList bookData={appBookData} readBook={readBook}/>
    </div>
  );
}

export default App;
