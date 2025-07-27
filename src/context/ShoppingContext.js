import { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    return (
        <ShoppingContext.Provider value={{
            shoppingCart, setShoppingCart
        }}>
            {children}
        </ShoppingContext.Provider>
    )
};