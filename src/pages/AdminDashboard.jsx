import { useState} from "react";
import { getRestaurants,saveRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
    const [data,setData]=useState(getRestaurants());
    const navigate=useNavigate();
    const deleteRestaurant=(id)=>{
        if(!confirm("Are you sure you want to delete this restaurant?")) return;
        const updatedData=data.filter((r)=>r.restaurantId!==id);
        saveRestaurants(updatedData);
        setData(updatedData);
        alert("Restaurant deleted successfully");
    };
    return(
        <div>
            <h2>Admin Dashboard</h2>
            {data.map((r)=>(
                <RestaurantCard key={r.restaurantId} data={r} isAdmin={true} deleteRestaurant={deleteRestaurant} onUpdate={(id)=>navigate(`/admin/restaurants/update/${id}`)}
                
                />
            ))}
        </div>
    );
};
export default AdminDashboard;