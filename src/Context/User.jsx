import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext({
    
})

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState(null)
    return(
        <UserContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}
export const useUserContext = () =>{
    return useContext(UserContext)
}