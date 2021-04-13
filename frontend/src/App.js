import { useState, useEffect } from 'react';
import axios from 'axios';

import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './app.css'

const defaultBooks = [
  { id: 1, title: 'Severance', author: 'Ling Ma', read: false },
  { id: 2, title: 'Real Life', author: 'Brandon Taylor', read: false },
  { id: 3, title: 'The Color Purple', author: 'Alice Walker', read: false }
]

function App() {
  const [ appBookData, setAppBookData ] = useState([])
  const [ loaded, setLoaded ] = useState(false);
  const [ newBookData, setNewBookData ] = useState({title: '', author: ''});

  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setAppBookData(res.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  const updateNewBookData = (key, ) => {
    return (value) => setNewBookData( prev => {
      return { ...prev, [key]: value}
    })
  }

  const addBook = () => {
    if (newBookData.title && newBookData.author){
      setAppBookData( prev => {
        return [...prev, {...newBookData, read: false, id: prev.length + 1}]
      })
      setNewBookData({title: '', author: ''})
    }
  }

  return (
    <div className="App">
      <BookForm newBookData={newBookData} updateNewBookData={updateNewBookData} addBook={addBook}/>
      {loaded && <BookList bookData={appBookData} />}
    </div>
  );
}

export default App;
