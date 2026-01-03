import { useEffect, useState } from "react";
import { getRestaurants, savedRestaurants} from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";
import Navbar from "../../components/Navbar";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  useEffect(() => {
    const storedData = getRestaurants();
    setData(storedData);
  }, []);

  const filtered = data.filter((r) => {
    return (
      (!search ||
        r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
        r.address.toLowerCase().includes(search.toLowerCase())) &&
      (!type || r.type === type) &&
      (!parking || r.parkinglot === (parking === "true"))
    );
  });

  return (
    <div>
      <h2 style={{ padding: "10px" }}>Customer Dashboard</h2>

      <Navbar
        setSearch={setSearch}
        setType={setType}
        setParking={setParking}
      />

      {filtered.length === 0 ? (
        <p style={{ padding: "10px" }}>
          No restaurants available
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px",
          }}
        >
          {filtered.map((r) => (
            <RestaurantCard key={r.restaurantID} data={r} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
