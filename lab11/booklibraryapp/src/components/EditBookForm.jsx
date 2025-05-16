import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { useParams } from "react-router";


function EditBookForm({ close }) {
    const { id, title, author, description, price } = useParams();

    const { updateBook } = useBookContext();

    const [formData, setFormData] = useState({
        title: title,
        author: author,
        description: description,
        price: price
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.author) {
            alert("Title and Author are required.");
            return;
        }

        await updateBook(id, {
            ...formData,
            price: parseFloat(formData.price),
        });

        setFormData({ title: "", author: "", description: "", price: "" });
    };



    return (
        <form onSubmit={handleSubmit} className=" add-form">
            <h4>Update Book</h4>
            <input
                className="form-control mb-2"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <input
                className="form-control mb-2"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
            />

            <textarea
                className="form-control mb-2"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                name="price"
                type="number"
                step="0.01"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
            />

            <button type="submit" className="btn btn-success">
                Update Book
            </button>

            <button className="btn-danger" onClick={close}>close</button>
        </form>

    )
}

export default EditBookForm