import ProductList from './ProductList';
import sampleJson from './sampleData';
import {useState} from 'react';

const Shop = () => {
  const [allProducts, setAllproducts] = useState(sampleJson);
  const [products, setProducts] = useState(allProducts);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState("");

    const filterProducts = () => {
        const categoryFilteredProducts = (category === 'all') ? allProducts : allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());


        const filteredProducts = (search === "") ? categoryFilteredProducts : categoryFilteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

        setProducts(filteredProducts);
    };

    const handleReset = () => {
        setCategory('all');
        setSearch("");
        setProducts(allProducts);
    };

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

  return (
    <div className="Shop">
        <h2>Browse Products by Category and Search by Product Name:</h2>
        <select name="categories" id="categories" onChange={handleChange}>
            <option value="all">All</option>
            <option value="beverages">Beverages</option>
            <option value="condiments">Condiments</option>
            <option value="confections">Confections</option>
            <option value="dairy">Dairy Products</option>
            <option value="cereals">Grains/Cereals</option>
            <option value="meat">Meat/Poultry</option>
            <option value="produce">Produce</option>
            <option value="seafood">Seafood</option>
        </select>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <button
          type="submit"
          onClick={filterProducts}>Submit
        </button>
        <button
          type="reset"
          onClick={handleReset}>Reset
          </button>
        <h3>All Products</h3>
        <ProductList 
        products={products}
        />
    </div>
  )
}

export default Shop
