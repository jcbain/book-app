import { useState, useEffect } from 'react';
import axios from 'axios';

import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './app.css'

function App() {
  const [ appBookData, setAppBookData ] = useState([])
  const [ loaded, setLoaded ] = useState(false);
  const [ newBookData, setNewBookData ] = useState({title: '', author: ''});

  const API = axios.create({baseURL: 'http://localhost:8000/'})

  useEffect(() => {
    API.get('books')
      .then(res => {
        setAppBookData(res.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  const updateNewBookData = (key) => {
    return (value) => setNewBookData( prev => {
      return { ...prev, [key]: value}
    })
  }

  const addBook = () => {
    if (newBookData.title && newBookData.author){
      const addedBook = {...newBookData, read: false, id: appBookData.length + 1}
      API.post('addbook', addedBook)
        .then(res => {
          setAppBookData( prev => {
            return [...prev, addedBook]
          })
          setNewBookData({title: '', author: ''})
        })
        .catch(err => console.log(err))
      
    }
  }

  const readBook = (index) => {
    let books = [...appBookData];
    let singleBook = {...books[index], read: !books[index].read};
    books[index] = singleBook;
    API.put(`books/${index}`, singleBook)
      .then(res => {
        setAppBookData(books)
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <BookForm newBookData={newBookData} updateNewBookData={updateNewBookData} addBook={addBook}/>
      {loaded && <BookList bookData={appBookData} readBook={readBook}/>}
    </div>
  );
}

export default App;
