import { createContext,useState,useEffect } from "react";
import { getLocalStorage,setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [userData, setUserData] = useState(null);
    

    useEffect(() => {
        if (!localStorage.getItem("employees")) {
            setLocalStorage();
        }
        const d = getLocalStorage();
        setUserData(d.employees)
    }, [])

    const adminData = getLocalStorage().admin;

    
    return (
        <div>
            <AuthContext.Provider value={{userData,setUserData,adminData}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;
