import {useNavigate} from "react-router-dom";

const RestaurantCard = ({data, isAdmin, onDelete}) => {
    const navigate = useNavigate();

    return (
        <div style = {{
            width : "260px",
            border : "1px solid #ccc",
            borderRadius : "6px",
            margin : "10px",
            padding : "8px",
            boxSizing : "border-box",
        }}>
            <img
                src={
                    data.image && data.image.trim() !== ""
                    ? data.image
                    : "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4586"
                }
                alt={data.restaurantName}
                style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "4px",
                }}
                />

            <h3> {data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>Type : {data.type}</p>
            <p>Parking : {data.parkinglot? "Yes" : "No"}</p>
            {isAdmin && (
                <>
                <button onClick = {() => navigate(`/admin/restaurants/update/${data.restaurantID}`)}>Update</button>
                <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default RestaurantCard;