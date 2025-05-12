import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import EditBookForm from "./EditBookForm";

function Book({ book }) {
    const { updateBook, deleteBook } = useBookContext();
    const [showUpdate, setShowUpdate] = useState(false);
    return (
        <div className="item">
            <p><small className="small">#{book.id}</small></p>
            <h3><span>{book.title}</span></h3>
            <p><span>{book.description}</span></p>
            <p>{book.price ? '$' : ''}<span>{book.price}</span></p>
            <p>By: <span>{book.author}</span></p>

            {!showUpdate && <button
                onClick={() => setShowUpdate(!showUpdate)}>update book</button>}
            {showUpdate && <EditBookForm

                close={() => setShowUpdate(!showUpdate)}

                book={book} />}

            {!showUpdate && <button className="btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>}

        </div>
    )
}

export default Book