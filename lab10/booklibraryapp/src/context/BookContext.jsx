import {  createContext, useEffect, useState } from "react"
const BookContext = createContext(null);
  export const BookProvider =({children}) =>{

      const [books, setBooks] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      // Implement CRUD functions and useEffect here

    //   useEffect(() => {
    //       async function fetchData() {
    //           // You can await here
    //           const response = await MyAPI.getData(someId);
    //           // ...
    //       }
    //       fetchData();
    //   }, [someId]);

      useEffect(
         () => {
             async function fetchData() {
          const result = await fetch('https://67d17ef590e0670699ba5929.mockapi.io/books');
          console.log(result)
          if (result.ok) {
              const data = result.json();
              setBooks(data)
          }
        }

        fetchData();
      }, [])
  

    return(
       <BookContext.Provider value={{books,
        // addBook, 
        // updateBook, 
        // deleteBook, 
        // loading,
        //  error
         }}>
        {children}
       </BookContext.Provider>
    );
};
export const useBookContext = () => useContext(BookContext);