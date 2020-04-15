import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BooksContext';

const BookEdit = () => {
    const { currentBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,author);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={currentBook.title}
            required
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="author" value={currentBook.author}
            required
            onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="change book"/>
            <input type="submit" value="cancel"/>
        </form>
    );
}

export default BookEdit;