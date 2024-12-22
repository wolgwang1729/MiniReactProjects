import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = () => {
        setUser({ userName: username, password: password });
    };

    const containerStyle = {
        width: "300px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
    };

    const titleStyle = {
        textAlign: "center",
        marginBottom: "20px",
        color: "green",
    };

    const inputGroupStyle = {
        marginBottom: "15px",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "5px",
        color: "#333",
    };

    const inputStyle = {
        width: "100%",
        padding: "8px",
        boxSizing: "border-box",
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
        backgroundColor: "#5cb85c",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Login</h2>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Username</label>
                <input
                    type="text"
                    value={username}
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                />
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />
            </div>
            <button type="submit" onClick={handleSubmit} style={buttonStyle}>
                Login
            </button>
        </div>
    );
}

export default Login;