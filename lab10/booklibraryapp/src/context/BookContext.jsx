import { createContext, useContext, useEffect, useState } from "react"
const BookContext = createContext(null);
export const BookProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';


    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const result = await fetch(API_URL);
                if (!result.ok) throw new Error('Failed to fetch');
                const data = await result.json();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Add Book
    const addBook = async (newBook) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBook),
            });
            const created = await response.json();
            setBooks(prev => [...prev, created]);
        } catch (err) {
            console.error('Error adding book:', err);
        }
    };

    // Update Book
    const updateBook = async (id, updatedFields) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFields),
            });
            const updated = await response.json();
            setBooks(prev =>
                prev.map(book => (book.id === id ? updated : book))
            );
        } catch (err) {
            console.error('Error updating book:', err);
        }
    };

    // Delete Book
    const deleteBook = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            setBooks(prev => prev.filter(book => book.id !== id));
        } catch (err) {
            console.error('Error deleting book:', err);
        }
    }


    return (
        <BookContext.Provider value={{
            books,
            loading,
            error,
            addBook,
            updateBook,
            deleteBook,
        }}>
            {children}
        </BookContext.Provider>
    );
};
export const useBookContext = () => useContext(BookContext);