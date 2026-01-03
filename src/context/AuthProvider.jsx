import { AuthContext } from './AuthContext.jsx';
import { useState } from "react";

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const login =(email,password)=>{
        if(email==="admin@gmail.com" && password==="admin123"){
            const data={role:"admin"};
            setUser(data);
            localStorage.setItem("user",JSON.stringify(data));
            return "admin";
        }
        if(email==="customer@gmail.com" && password==="customer123"){
            const data={role:"customer"};
            setUser(data);
            localStorage.setItem("user",JSON.stringify(data));
            return "customer";
        }
        alert("Invalid Credentials");
        return null;
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};