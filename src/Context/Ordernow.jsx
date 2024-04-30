import React, { createContext, useContext, useState } from 'react'

export const OrderNowContext = createContext({})
export function OrderNowContextProvider({children}){
    const [OrderNow, setOrderNow] = useState(false)
    const [OrderFormData, setOrderFormData] = useState(null)
    return (
        <OrderNowContext.Provider value={{OrderNow, setOrderNow, OrderFormData, setOrderFormData}}>
            {children}
        </OrderNowContext.Provider>
    )
}
export const useOrderNowContext = () =>{
    return useContext(OrderNowContext)
}