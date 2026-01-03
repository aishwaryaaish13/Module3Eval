import json from "@eslint/js";
import { useState } from "react";
import { AuthContext } from "./AuthContextObj";

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(json.parse(localStorage.getItem("user")) || null);
    const login =(email,password)=>{
        if(email==="admin@gmail.com" && password==="admin123"){
            const data={role:"admin"};
            setUser(data);
            localStorage.setItem("user",json.stringify(data));
            return "admin";
        }
        if(email==="customer@gmail.com" && password==="customer123"){
            const data={role:"customer"};
            setUser(data);
            localStorage.setItem("user",json.stringify(data));
            return "customer";
        }
        alert("Invalid Credentials");
        return null;
    };
    const logout =()=>{
        setUser(null);
        localStorage.clean()
;    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};