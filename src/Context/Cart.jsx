import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export function CartContextProvider({children}){
    const [cartcount, setCartcount] = useState(0)
    return (
        <CartContext.Provider value={{cartcount, setCartcount}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCartContext = () =>{
    return useContext(CartContext)
}

