import React from "react";
import Book from "./Book"
import { useBookContext } from "../context/BookContext";




function BookList() {
    const { books, loading, error } = useBookContext();

    return (
        <div className="booklist">
            {loading && <span>Loading ...</span>}
            {error && <p>{error}</p>}

            {!loading && books.map((book) => (
                <Book
                    key={book.id}
                    book={{ ...book }} />
            ))}

        </div>

    )
}

export default BookList