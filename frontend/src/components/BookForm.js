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
                label={'title'} 
                inputValue={newBookData.title} 
                onInputChange={updateNewBookData('title')} 
                placeholder={'new title'} />
            <LabelledInput inputId={'new-author'} 
                label={'author'} 
                inputValue={newBookData.author} 
                onInputChange={updateNewBookData('author')} 
                placeholder={'new author'} />
            <input className='form-submit' type="submit" value="add new book" onClick={handleSubmit}/>
 
            
        </form>
    )
}

export default BookForm;