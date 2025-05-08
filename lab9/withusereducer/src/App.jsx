import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'
import { useReducer } from 'react';


// Reducer function
function productReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_STOCK':
      return state.map(product =>
        product.id === action.payload
          ? { ...product, inStock: !product.inStock }
          : product
      );
    default:
      return state;
  }
}

function App() {

  const data = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    {
      id: 3, name: 'Cherry'
    }
  ]
  const [productList, dispatch] = useReducer(productReducer, data);

  const toggleStock = (id) => {
    dispatch({ type: 'TOGGLE_STOCK', payload: id });
  };

 




  return (

    <div>
      <ProductList products={productList} onToggle={toggleStock} />
    </div>

  )
}

export default App
