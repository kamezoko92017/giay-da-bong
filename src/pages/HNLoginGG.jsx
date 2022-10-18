import React from 'react';
import GGLogin from '../components/GGLogin';


const HNLoginGG = () => {
    return (
        <div>
            <h1>Login with Google Account using React and Node.js</h1>
            <div className="wrapper">
                <GGLogin text={"Log in with Google"} />
            </div>
        </div>
    )
}

export default HNLoginGG