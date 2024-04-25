import React, { createContext, useContext, useState } from "react";

export const PrintContext = createContext({})
export function PrintContextProvider({children}){
    const [printCards, setPrintCards] = useState(null);
    return (
        <PrintContext.Provider value={{printCards, setPrintCards}}>
            {children}
        </PrintContext.Provider>
    )
}

export const usePrintContext = () =>{
    return useContext(PrintContext)
}