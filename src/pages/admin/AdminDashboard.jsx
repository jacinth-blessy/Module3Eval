import {useState, useEffect} from "react";
import {getRestaurants, savedRestaurants} from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";
import AddRestaurantForm from "../../components/AddRestaurantForm";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [parking, setParking] = useState("");

    const load = () => setData(getRestaurants());

    useEffect(load, []);

    const handleDelete = (id) => {
        if(!confirm("Are you sure you want to delete?")) return;
        const updated = data.filter((r) => r.restaurantID !== id);
        savedRestaurants(updated);
        alert("Deleted successfully");
        load();
    };

    const filtered = data.filter((r) => {
        return ((!search || r.restaurantName.toLowerCase().includes(search.toLocaleLowerCase()) || 
    r.address.toLowerCase().includes(search.toLocaleLowerCase())) && (!type ||r.type === type) && (!parking || r.parking === (parking === "true"))
    );
});
return (
    <div style = {{display : "flex",
        flexWrap : "wrap",
        gap : "10px",
        justifyContent : "flex-start",
    }}>
        <div style = {{width : "25%"}}>
            <AddRestaurantForm refresh= {load} />
        </div>
        <div style = {{width : "75%"}}>
            <Navbar setSearch = {setSearch}
            setType = {setType} setParking = {setParking} />
            {filtered.map((r) => (
                <RestaurantCard key = {r.restaurantID}
                data = {r} isAdmin onDelete={handleDelete}/>
            ))}
        </div>
    </div>
);

};

export default AdminDashboard;