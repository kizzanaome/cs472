import Product from "./Product";

function ProductList({products, onToggle}) {


    return (
        products.map((product) =>
            <Product
                key={product.id}
                {...product}
                onToggle={()=> onToggle(product.id)}    
            />)

    );
}

export default ProductList;