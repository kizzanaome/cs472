import React from "react";
import Book from "./Book"
import { useBookContext } from "../context/BookContext";

const { books } = useBookContext;

function BookList() {
    console.log(Book)
    return (
        books.map((book)=>{
            <Book 
            key={book.id} 
            book={{...book}}/>
        })
 
    )
}

export default BookList