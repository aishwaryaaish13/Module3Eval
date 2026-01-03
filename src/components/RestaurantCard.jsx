const RestaurantCard = ({ data, isAdmin, onDelete, onUpdate }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
        <img src={data.image} alt={data.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
        <h3>{data.restaurantName}</h3>
        <p>Cuisine: {data.address}</p>
        <p>{data.type}</p>
        <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>
    {isAdmin && (
        <>
            <button onClick={() => onUpdate(data.restaurantId)}>Update</button>
            <button onClick={() => onDelete(data.restaurantId)}>Delete</button>
        </>
    )}
    </div>
    );
};
export default RestaurantCard;
    