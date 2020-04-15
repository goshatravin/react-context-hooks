import React, { useContext, useState} from 'react'
import { BookContext } from '../context/BooksContext';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,author);
        addBook(title, author)
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title}
            required
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="author" value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="add book"/>
        </form>
    );
}

export default NewBookForm;