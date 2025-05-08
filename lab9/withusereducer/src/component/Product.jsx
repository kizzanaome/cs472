import { useState } from "react";

function Product({name,price,inStock,onToggle}) {

    return (
        <div>
            <h3 style={{ color: inStock ? 'green' : 'red' }}>Name: {name}</h3>
            <p>price: {price}</p>
            <p>status: 
                <span className={inStock ? "instockstatus" : "outofstockstatus"}>
                    {inStock ? "In Stock" : "Out of Stock"}
                </span>
            </p>
            <button onClick={onToggle}>Toggle stock status</button>
        </div>
    )

}

export default Product;