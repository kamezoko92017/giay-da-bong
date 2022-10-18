import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE;
const Dashboard = () => {
    let navigate = useNavigate();

    const onLogoutSuccess = () => {
        toast.success('Logged out Successfully', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, });
        localStorage.removeItem('loginID');
        navigate('/');
    };
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };
    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <div>
            <h1> Dashboard </h1>
            <h4> Insert Id : {JSON.parse(localStorage.getItem('loginID'))} </h4>
            <button onClick={signOut} className="gr__log__button">Logout</button>
        </div>
    )
}

export default Dashboard