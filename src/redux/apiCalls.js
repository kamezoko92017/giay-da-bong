import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { toast } from "react-toastify";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        let res = await publicRequest.post("/auth/login", user);
        toast.success('Login Successfully', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, });
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure)
        toast.success('Login Failed', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, });
    }
}