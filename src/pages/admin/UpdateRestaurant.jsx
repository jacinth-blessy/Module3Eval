import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRestaurants, savedRestaurants } from "../../utils/localStorage";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const data = getRestaurants();
    const restaurant = data.find(
      (r) => r.restaurantID === Number(id)
    );

    if (!restaurant) {
      alert("Restaurant not found");
      navigate("/admin/dashboard");
      return;
    }

    // convert boolean → string for select
    setForm({
      ...restaurant,
      parkinglot: restaurant.parkinglot ? "true" : "false",
    });
  }, [id, navigate]);

  const handleUpdate = () => {
  if (
    form.restaurantName.trim() === "" ||
    form.address.trim() === "" ||
    form.type === "" ||
    form.parkinglot === ""
  ) {
    alert("All fields required");
    return;
  }

  if (!confirm("Are you sure you want to update?")) return;

  const updatedData = getRestaurants().map((r) =>
    r.restaurantID === Number(id)
      ? {
          ...form,
          parkinglot: form.parkinglot === "true",
        }
      : r
  );

  savedRestaurants(updatedData);
  alert("Restaurant updated successfully");


  setForm(null);


  navigate("/admin/dashboard");
};


  if (!form) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Restaurant</h2>

      <input
        value={form.restaurantName}
        onChange={(e) =>
          setForm({ ...form, restaurantName: e.target.value })
        }
        placeholder="Restaurant Name"
      />

      <br />

      <input
        value={form.address}
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
        placeholder="Address"
      />

      <br />

      <select
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option value="">Select Type</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <br />

      <select
        value={form.parkinglot}
        onChange={(e) =>
          setForm({ ...form, parkinglot: e.target.value })
        }
      >
        <option value="">Parking?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateRestaurant;
