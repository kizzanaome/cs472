import React from "react";
import Book from "./Book"
import { useBookContext } from "../context/BookContext";



function BookList() {
    const { books } = useBookContext();

    return (
        <div className="booklist">
        <BookForm />

        {books.map((book)=>(
            <Book 
            key={book.id} 
            book={{...book}}/>
        ))}
        </div>
 
    )
}

export default BookList