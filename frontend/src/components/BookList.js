const BookList = ({bookData, readBook}) => {

    return (
        <div>
        <h2 className={'title'}>my books</h2>
        <table className="book-list">
          <thead>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>read</th>
          </tr>
          </thead>
          <tbody>
          {bookData.map((book, i) => {
            return (
              <tr key={book.id}>
                <td>
                  {book.title}
                </td>
                <td>
                  {book.author}
                </td>
                <td>
                  <input type="checkbox"
                    checked={book.read}
                    onChange={() => readBook(i)}/>
                </td>
                
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>

    )
}

export default BookList