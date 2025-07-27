import { useContext } from "react";
import { ShoppingContext } from "./context/ShoppingContext";
import { useSearchParams } from "react-router-dom";

const AddCart = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingContext);
    const [searchParams] = useSearchParams();
    const item = {
        id: searchParams.get('id'),
        name: searchParams.get('name'),
        price: searchParams.get('price'),
        quantity: 1
    };
    const addToCart = () => {
        const itemFound = shoppingCart.find(entry => entry.id === item.id);
        if (itemFound) {
            
        } else {
            setShoppingCart(prev => [...prev, item]);
        }
    };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {shoppingCart.length > 0 ? (
        <div></div>
      ) : (
        <span>No Items Found</span>
      )}
    </div>
  )
}

export default AddCart
