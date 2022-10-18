import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

const clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE;
const GGLogin = (props) => {
    let navigate = useNavigate();

    const onSuccess = async (res) => {
        console.log('Google Login Name', res.profileObj);
        axios.post(`${process.env.REACT_APP_BASE_URL}users/loginGoogle`, {
            email: res.profileObj.email,
            familyName: res.profileObj.familyName,
            givenName: res.profileObj.givenName,
            googleId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
            name: res.profileObj.name,
        })
            .then(res => {
                if (res.data.success === true) {
                    console.log(res.data.usersid);
                    localStorage.setItem('loginID', JSON.stringify(res.data.usersid));
                    toast.success('Login Successfully', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, });
                    navigate('/dashboard');
                }
                if (res.data.success === false) {
                    toast.error(res.data.msg, { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, });
                }
            })
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };
    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    return (<>
        <Button sx={{ mb: 2 }} onClick={signIn} startIcon={<GoogleIcon style={{ color: 'red' }} />} variant="outlined"> {props.text}</Button>
    </>)
}
export default GGLogin