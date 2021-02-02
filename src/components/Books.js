import React, { useState, useEffect } from 'react';
import booksFromAssets from '../assets/childrensbooks.json';
import '../App.css';

import Book from './Book';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksFromAssets);
    }, [])

    return (
        <section className="library">
            <div className="wrapper">
                <main className="books">
                    { books.map((book, index) => {
                        return <Book book={ book } key={ index } />
                    })}
                </main>
            </div>
        </section>
    )
}

export default Books;