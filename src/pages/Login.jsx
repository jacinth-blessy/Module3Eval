import {useContext, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        if(!email || !password) {
            alert("All fields required");
            return;
        }

        const role = login(email, password);
        if(role === "admin") navigate("/admin/dashboard");
        if(role === "customer") navigate("/customers/dashboard");
    };

    return (
        <div style = {{padding : 20}}>
            <h2>Login</h2>
            <input placeholder = "Email" onChange = {(e) => setEmail(e.target.value)} />
            <br />
            <input type = "password" placeholder = "Password" onChange = {(e) => setPassword(e.target.value)}/>
            <br />
            <button onClick = {handleLogin}>Login</button>
        </div>
    );
};

export default Login;