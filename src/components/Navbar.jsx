import {useEffect, useRef} from "react";

const Navbar = ({ setSearch, setType, setParking}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div style = {{padding : 10, borderBottom : "1px solid grey"}}>
            <input ref={inputRef} placeholder="Search by name or address" onChange={(e) => setSearch(e.target.value)}/>
            <select onChange = {(e) => setType(e.target.value)}>
                <option value = "">All Types</option>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Mughal</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North Indian</option>
                <option>South Indian</option>
            </select>

            <select onChange = {(e) => setParking(e.target.value)}>
                <option value = "">All Parking</option>
                <option value = "true">Parking</option>
                <option value = "false">No Parking</option>
            </select>
        </div>
    );
};

export default Navbar;

