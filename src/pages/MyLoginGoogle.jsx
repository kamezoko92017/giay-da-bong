import React from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";


const MyLoginGoogle = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    gapi.load("client:auth2", () => {
        gapi.client.init({
            clientId: "127020212234-0hipq81mt6ti4hclh0658ksifu7pv99f.apps.googleusercontent.com",
            plugin_name: "chat",
        });
    });

    // 127020212234 - 0hipq81mt6ti4hclh0658ksifu7pv99f.apps.googleusercontent.com
    // 512893649815 - n1iq8bk10dji52a4f16ids83o7gsjpfb.apps.googleusercontent.com
    return (
        <div>
            <GoogleLogin
                clientId="127020212234-0hipq81mt6ti4hclh0658ksifu7pv99f.apps.googleusercontent.com"
                buttonText="Login by google hainguyen"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default MyLoginGoogle