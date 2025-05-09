import React from "react";
import { useBookContext } from "../context/BookContext";

function BookFormActions() {
    const { addBook, updateBook, deleteBook } = useBookContext();

    const handleAdd = () => {
        const newBook = {
            title: "New Book",
            author: "Someone",
            description: "A fresh new book",
            price: 19.99
        };
        addBook(newBook);
    };

    const handleUpdate = () => {
        const id = "1";
        updateBook(id, { title: "Updated Title" });
    };

    const handleDelete = () => {
        const id = "1";
        deleteBook(id);
    };

    return (
        <div>
            <button onClick={handleAdd}>Add Book</button>
            <button onClick={handleUpdate}>Update Book #1</button>
            <button onClick={handleDelete}>Delete Book #1</button>
        </div>
    );
}

export default BookFormActions;
