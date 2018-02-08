import React from 'react';
import Book from "./Book";

const BookList = ({books}) => {
    const bookItems = books.map((book) => (
        <Book key={book.id} {...book}/>
    ));

    return (
        <div className="book-list">
            {bookItems}
        </div>
    );
};

export default BookList;
