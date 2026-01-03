import { useParams,useNavigate } from "react-router-dom";
import { getRestaurants,saveRestaurants } from "../utils/localStorage";
import { useState } from "react";
const UpdateRestaurant = () => {
    const { id } = useParams();
    const navigate=useNavigate();
    const data = getRestaurants();
    const restaurant = data.find((r) => r.restaurantId === id);
    const [form, setForm] = useState(restaurant);
    const handleUpdate =()=>{
        const updated=data.map((r)=>
            r.restaurantId===id ? form : r
        );
        saveRestaurants(updated);
        alert("Restaurant updated successfully");
        navigate("/admin/dashboard");
    };
    return(
        <div> 
            <h2>Update Restaurant</h2>
            <input value={form.restaurantName} onChange={(e)=>setForm({...form,restaurantName:e.target.value})} placeholder="Restaurant Name" />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};
export default UpdateRestaurant;

