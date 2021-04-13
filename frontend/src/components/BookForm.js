import LabelledInput from './LabelledInput'
import './bookForm.css'


const BookForm = ({ newBookData, updateNewBookData, addBook }) => {

    const handleSubmit = e => {
        e.preventDefault();
        addBook()

    }
    return (
        <form className={'book-form'}>
            <h2 className={'title'}>add a new book</h2>
            <LabelledInput inputId={'new-book'} 
                label={'book'} 
                value={newBookData.title} 
                onInputChange={updateNewBookData('title')} 
                placeholder={'new book'} />
            <LabelledInput inputId={'new-author'} 
                label={'author'} 
                value={newBookData.author} 
                onInputChange={updateNewBookData('author')} 
                placeholder={'new author'} />
            <input className='form-submit' type="submit" value="add new book" onClick={handleSubmit}/>
 
            
        </form>
    )
}

export default BookForm;