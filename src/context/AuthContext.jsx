import { createContext, useState } from "react";

export const AuthContext = createContext()


export function AuthContextProvider({children}){
    const [user, setUser] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
        {children}
    </AuthContext.Provider>
}