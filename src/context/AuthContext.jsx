import {createContext, useState} from "react";

export const AuthContext = createContext();

const validUsers = {
    admin : {
        email : "admin@gmail.com",
        password : "admin1234",
        role : "admin",
    },
    customer : {
        email : "customer@gmail.com",
        password : "customer1234",
        role : "customer",
    },
};

export const AuthProvider = ({children}) => {
    const[auth, setAuth] = useState(
        JSON.parse(localStorage.getItem("auth")) || null);

    const login = (email, password) => {
        const user = Object.values(validUsers).find((u) => u.email === email && u.password === u.password);
        if(!user){
            alert("Invalid Email or Password");
            return false;
        }

        localStorage.setItem("auth", JSON.stringify(user));
        setAuth(user);
        return user.role;
    };

    const logout = () => {
        localStorage.removeItem("auth");
        setAuth(null);
    };

    return (
        <AuthContext.Provider value = {{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};