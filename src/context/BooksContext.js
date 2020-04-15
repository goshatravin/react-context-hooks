import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patric rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ]);
    const [currentBook, setEditBook] = useState('')
    const addBook = (title, author) => {
        console.log(title, author)
        setBooks([...books, {title: title, author: author, id: uuidv1() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    const updateBook = (id) => {
        setEditBook(books.filter(book => book.id === id))
    }
    const editBook = (title, author,id) => {
        setBooks(books.map(book => {
            if(book.id === id){
                return {title: title, author: author, id: id }
            }else{
                return book
            }
        }))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook, currentBook,  updateBook, editBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;