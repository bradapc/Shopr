import { useNavigate } from "react-router-dom";

const ProductList = ({products}) => {
  let categoryColors = {
    beverages: 'blue',
    condiments: 'red',
    confections: 'black',
    dairy: 'purple',
    cereals: '#55A5B3',
    meat: 'orange',
    produce: 'green',
    seafood: 'cyan'
};

  const navigate = useNavigate();

  return (
    <div>
      <table className="productsTable">
        <tbody>
          {products.length ? (
              products.map(product => (
                  <tr 
                  key={product.id}
                  style={{color: categoryColors[product.category]}}
                  >
                      <th className="AddToCartText" onClick={() => navigate(`/addcart?id=${product.id}&name=${product.name}&price=${product.price}`)}>
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
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
