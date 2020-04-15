import React, { useContext } from 'react';
import { BookContext } from '../context/BooksContext';

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext)
    const { updateBook } = useContext(BookContext);
    return (
        <li>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
            <button className="Delete-book" onClick={() => removeBook(book.id)}>Delete Book</button>
            <button onClick={() => updateBook(book.id)}>Edit Book</button>
        </li>
    ) ;
}

export default BookDetails;