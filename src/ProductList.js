const ProductList = ({products}) => {
  return (
    <div>
      <table className="productsTable">
        {products.length ? (
            products.map(product => (
                <tr 
                key={product.id}
                >
                    <th>
                        Add to Cart
                    </th>
                    <th>{product.name}</th>
                    <th>{product.category}</th>
                    <th>{`$${product.price}`}</th>
                </tr>
            ))
        ) : (
            <p>No products found</p>
        )}
      </table>
    </div>
  )
}

export default ProductList
