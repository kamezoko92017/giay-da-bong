import "./user.css";
import { Link, useLocation } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';


import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
// import { userRequest } from "../../requestMethods";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateUser } from "../../redux/apiCalls";

const User = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const user = useSelector((state) =>
        state.user.allUsers.users.find((user) => user._id === userId)
    );

    // const [pStats, setPStats] = useState([]);
    const [inputs, setInputs] = useState(user);
    const [file, setFile] = useState([user['avatar']]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const user = { _id: userId, ...inputs, avatar: downloadURL };
                    // console.log('user:', user);
                    updateUser(userId, user, dispatch);
                });
            }
        );
    };

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={file}
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                            <span className="userShowUserTitle">{user.isAdmin ? "administrator" : "user normal"}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.fullname}</span>
                        </div>
                        {/* <div className="userShowInfo">
                            <CalendarTodayIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div> */}
                        <span className="userShowTitle">Contact Details</span>
                        {/* <div className="userShowInfo">
                            <PhoneAndroidIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div> */}
                        <div className="userShowInfo">
                            <MailOutlineIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.address}</span>
                        </div>
                    </div>
                </div>


                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    value={inputs['username']}
                                    name="username"
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    value={inputs['fullname']}
                                    name="fullname"
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    value={inputs['email']}
                                    name="email"
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                />
                            </div>
                            {/* <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+1 123 456 67"
                                    className="userUpdateInput"
                                />
                            </div> */}
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    value={inputs['address']}
                                    name="address"
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src={file}
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <PublishIcon className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }}
                                    onChange={(e) => {
                                        setFile(e.target.files[0]);
                                    }}
                                />
                            </div>
                            <button className="userUpdateButton" onClick={handleUpdate}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User