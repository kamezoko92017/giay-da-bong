import { publicRequest, userRequest } from "../requestMethods";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
} from "./productRedux";

import {
    loginFailure,
    loginStart,
    loginSuccess,
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
} from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        let res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure)
    }
}
//get all users
export const getAllUsers = async (dispatch, user) => {
    dispatch(getAllUsersStart());
    try {
        const res = await userRequest.get("/users");
        dispatch(getAllUsersSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersFailure());
    }
}
//create new user
export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userRequest.post(`/users`, user);
        console.log('res.data: ', res.data);
        dispatch(addUserSuccess(res.data));
    } catch (err) {
        dispatch(addUserFailure());
    }
};
//update user
export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        // update
        const res = await userRequest.put(`/users/${id}`, user);
        dispatch(updateUserSuccess({ id, user }));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};
//delete user
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};
//get all products
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update
        const res = await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};