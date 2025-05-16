import React from "react";
import Book from "./Book"
import { useBookContext } from "../context/BookContext";
import BookForm from "./AddBookForm";



function BookList() {
    const { books, loading, error } = useBookContext();

    console.log(error)

    return (
        <div className="content">
            <BookForm />
            <div className="booklist">
                {loading && <span>Loading ...</span>}
                {error && <p>{error}</p>}

                {!loading && books.map((book) => (
                    <Book
                        key={book.id}
                        book={{ ...book }} />
                ))}
            </div>
        </div>

    )
}

export default BookList