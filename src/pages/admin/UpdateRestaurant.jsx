import {useParams, useNavigate} from "react-router-dom";

import {useState, useEffect} from "react";

import { getRestaurants, savedRestaurants } from "../../utils/localStorage";

const UpdateRestaurant = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(null);

    useEffect(() => {
        const data = getRestaurants();
        setForm(data.find((r) => r.restaurantID === id));
    }, []);

    const handleUpdate = () => {
        if(!confirm("Are you sure you want to update?")) return;

        const data = getRestaurants().map((r) => r.restaurantID == id? form:r);

        savedRestaurants(data);
        alert("Updated succesfully");
        navigate("/admin/dashboard");
    };


    if(!form) return null;

    return (
        <div>
            <h2>Update Restaurant</h2>
            <input value = {form.restaurantName} onChange = {(e) => setForm({...form, restaurantName: e.target.value})}/>
            <input value = {form.address} onChange = {(e) => setForm({...form, address: e.target.value})}/>
            <button onClick = {handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateRestaurant;