import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'
import { useReducer } from 'react';

function App() {
  const data = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    {
      id: 3, name: 'Cherry'
    }
  ]
  const [productList, setProductlist] = useState(data)



  const toggleStock = (id) => {
    const updateList = productList.map((product) =>
      product.id == id ? { ...product, inStock: !product.inStock } : product
    );
    setProductlist(updateList)
  }




  return (

    <div>
      <ProductList products={productList} onToggle={toggleStock} />
    </div>

  )
}

export default App
