import React, { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

function BookForm() {
    const { addBook } = useBookContext();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        price: ""
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

        await addBook({
            ...formData,
            price: parseFloat(formData.price),
        });

        setFormData({ title: "", author: "", description: "", price: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <h4 className="title">Add a New Book</h4>

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
                // cols={3}
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
                Add Book
            </button>
        </form>
    );
}

export default BookForm;
