import React, { useContext } from 'react';
import { BookContext } from '../context/BooksContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>George Reading List</h1>
            <p>Currently you have { books.length } books to geth throught</p>
        </div>
    );
}

export default Navbar;