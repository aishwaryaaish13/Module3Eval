import { useContext,useState } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const {email,setEmail}=useState("");
    const {password,setPassword}=useState("");
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const role=login(email,password);
        if(role==="admin"){
            navigate("/admin/dashboard");
        }
        else if(role==="customer"){
            navigate("/customer/restaurants");
        };
    };
    return(
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};
export default Login;