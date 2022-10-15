import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        allUsers: [],
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        //LOGIN
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },

        //GET ALL USERS
        getAllUsersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getAllUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.allUsers = action.payload;
        },
        getAllUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //ADD NEW USER
        addUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addUserSuccess: (state, action) => {
            state.isFetching = false;
            state.allUsers.users.push(action.payload);
        },
        addUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //DELETE
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.allUsers.users.splice(
                state.allUsers.users.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.allUsers.users[
                state.allUsers.users.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.user;
        },
        updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailure,
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
} = userSlice.actions;
export default userSlice.reducer;