export const getRestaurants=()=>{
    return JSON.parse(localStorage.getItem("evaData")) || [];
};
export const saveRestaurants=(data)=>{
    localStorage.setItem("evaData",JSON.stringify(data));
};