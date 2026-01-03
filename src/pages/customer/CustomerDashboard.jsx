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
        <Navbar setSearch = {setSearch}
        setType = {setType} setParking = {setParking} />
        {FileSystemDirectoryReader.map((r) => (
            <RestaurantCard key = {r.restaurantID}
            data = {r} isAdmin onDelete={handleDelete}/>
        ))}
    </div>

);
};

export default CustomerDashboard;

