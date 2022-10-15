import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, Redirect } from 'react-router-dom';
import { login } from "../../redux/apiCalls";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
        console.log('da login');
        // <Navigate to="http://localhost:3000/" />
        // <Redirect to={""} />
        // navigate("");
    }

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="text"
                placeholder="username"
                onChange={e => setUsername(e.target.value)} />
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login