import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import EditBookForm from "./EditBookForm";
import { Link } from "react-router";

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

            {!showUpdate &&
                <>

                    <Link className="button" to={`/editbook/${book.id}/${book.author}/${book.title}/${book.description}/${book.price}`}>
                        Update Book
                    </Link>
                </>
            }

            {!showUpdate && <button className="btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>}

        </div>
    )
}

export default Book