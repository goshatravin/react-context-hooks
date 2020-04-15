import React, { useContext, useState, useEffect} from 'react'
import { BookContext } from '../context/BooksContext';

const NewBookForm = () => {
 
    const { addBook } = useContext(BookContext)
    const { currentBook } = useContext(BookContext)
    const { editBook } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        currentBook.length ? (
            (update())
        ) : (
            console.log('пусто')
        )
        console.log(currentBook);
    }, [currentBook])
    const update = () => {
        setEdit(true)
        setTitle(currentBook[0].title)
        setAuthor(currentBook[0].author)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,author);
        addBook(title, author)
        setTitle('');
        setAuthor('');
    }
    const handleChange = (e) => {
        e.preventDefault();
        console.log(title,author);
        editBook(title, author, currentBook[0].id)
        setTitle('');
        setAuthor('');
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setTitle('');
        setAuthor('');
        setEdit(false)
    }
    return ( edit ? (
        <form>
            <input type="text" placeholder="book title" value={title}
            required
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="author" value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="edit book" onClick={handleChange}/>
            <input type="submit" value="cancel" onClick={handleCancel}/>
        </form>
    ) : (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title}
            required
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="author" value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="add book"/>
        </form>
    ) )
}

export default NewBookForm;