import {useState} from "react";
import {getRestaurants, savedRestaurants} from "../utils/localStorage";

const AddRestaurantForm = ({refresh}) => {
    const initialState = {
        restaurantName : "",
        address : "",
        type:"",
        parkinglot: "",
        image : "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    };

    const [form, setForm] = useState(initialState);

    const handleAdd = () => {
        if(
            form.restaurantName.trim() === "" ||
            form.address.trim() === "" ||
            form.type === "" ||
            form.parkinglot === ""
        ) {
            alert("All fields required");
            return;
        }

    if(!confirm("Add restaurant?")) return;

    const data = getRestaurants();


    const newRestaurant = { restaurantID : Date.now(),
        restaurantName : form.restaurantName,
        address : form.address,
        type : form.type,
        parkinglot:form.parkinglot === "true",
        img : form.image,
    };

    savedRestaurants([...data, newRestaurant]);
    alert("Restuarant Added");
    refresh();
    setForm(initialState);
};

return (
    <div>
    <h3>Add Restaurant</h3>
    <input placeholder = "Name" onChange = {(e) => setForm({...form, restaurantName:e.target.value})}/>
    <input placeholder = "Address" onChange = {(e) => setForm({...form, address :e.target.value })}/>
    <select  onChange = {(e) => setForm({...form, type :e.target.value })}>
        <option value = "">All Types</option>
            <option>Rajasthani</option>
            <option>Gujarati</option>
            <option>Mughal</option>
            <option>Jain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
    </select>
    <select onChange = {(e) => setForm({...form, parkinglot : e.target.value})}>
        <option value = "">All Parking</option>
        <option value = "true">Parking</option>
        <option value = "false">No Parking</option>
    </select>
    <button onClick = {handleAdd}>Add</button>
</div>
);
};

export default AddRestaurantForm;