import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import BookForm from './components/AddBookForm'
import { Routes, Route } from 'react-router';
import Layout from './components/Layout'
import EditBookForm from './components/EditBookForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookList />} />
        <Route path="addbook" element={<BookForm />} />
        <Route path="editbook/:id/:author/:title/:description/:price" element={<EditBookForm />} />
      </Route>
    </Routes >


  )
}



{/* <Routes>
  <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="books" element={<Books />} />
    <Route path="books/:id/:author/:title" element={<BookDetail />} />
    <Route path="*" element={<NoMatch />} />
  </Route>
</Routes> */}
export default App
