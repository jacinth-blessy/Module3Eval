import {useEffect, useState} from "react";
import { getRestaurants } from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";
import Navbar from "../../components/Navbar";

const CustomerDashboard = () => {
     const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [parking, setParking] = useState("");

    useEffect(() => {
        setData(getRestaurants());
    }, []);


    const filtered = data.filter((r) => {
        return ((!search || r.restaurantName.toLowerCase().includes(search.toLocaleLowerCase()) || 
    r.address.toLowerCase().includes(search.toLocaleLowerCase())) && (!type ||r.type === type) && (!parking || r.parking === (parking === "true"))
    );
});

    return (
    <div>
        <h2 style = {{ padding : "10px"}}>Customer Dashboard</h2>
        <Navbar setSearch = {setSearch}
        setType = {setType} setParking = {setParking} />
        {filtered.length ===0 ? (
            <p style = {{padding : "10px"}}>No Restaurants available</p>
        ): (
            <div style = {{padding : "10px",
                display : "flex",
            flexWeap : "wrap",
        gap : "10px",}}>

        {filtered.map((r) => (
            <RestaurantCard key = {r.restaurantID}
            data = {r} isAdmin onDelete={handleDelete}/>
        ))}
    </div>
        )}
        </div>
);
};

export default CustomerDashboard;

