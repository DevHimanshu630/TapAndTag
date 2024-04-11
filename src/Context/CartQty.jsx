import React, { createContext, useContext, useState } from 'react'

export const CartQtyContext = createContext({})
export function CartQtyContextProvider({children}){
    const [cartQty, setCartQty] = useState([])
    console.log('things',cartQty)
    return (
        <CartQtyContext.Provider value={{cartQty, setCartQty}}>
            {children}
        </CartQtyContext.Provider>
    )
}

export const useCartQtyContext = () =>{
    return useContext(CartQtyContext)
}