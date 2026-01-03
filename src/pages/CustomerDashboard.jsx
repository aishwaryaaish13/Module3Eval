import { useState } from "react";
import { getRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
const CustomerDashboard = () => {
    const [data]=useState(getRestaurants());
    return(
        <div>
            <h2>Customer Dashboard</h2>
            {data.map((r)=>(
                <RestaurantCard key={r.restaurantId} data={r} isAdmin={false} />
            ))}
        </div>
    );
};
export default CustomerDashboard;