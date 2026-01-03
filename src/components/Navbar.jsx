import { useContext,useEffect,useRef,useState} from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
const Navbar = ({onSearch,onTypeFilter,onParkingFilter}) => {
    const {user,logout}=useContext(AuthContext);
    const [searchTerm,setSearchTerm]=useState("");
    const searchRef=useRef(null);
    useEffect(()=>{
        searchRef.current.focus();
    },[]);
    const handleSearch =(e)=>{
        const value=e.target.value;
        setSearchTerm(value);  
        onSearch(value);
    };
    return(
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",borderBottom:"1px solid #ccc"}}>
            <h3 style={{margin:"0"}}>{user?.role==="admin" ? "Admin Dashboard" : "Customer Dashboard"}</h3>
            <input type="text" placeholder="Search Restaurants..." value={searchTerm} onChange={handleSearch} ref={searchRef} />
            <select onChange={(e)=>onTypeFilter(e.target.value)}>
                <option value="">All Types</option> 
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Both">Both</option>  
            </select>
            <select onChange={(e)=>onParkingFilter(e.target.value)}>
                <option value="">All</option>
                <option value="yes">With Parking</option>   
                <option value="no">Without Parking</option>
            </select>
            <button onClick={logout} style={{marginLeft:"10px",backgroundColor:"red",color:"white",border:"none",padding:"5px 10px",cursor:"pointer"}}>Logout</button>
        </div>
    );
};
export default Navbar;