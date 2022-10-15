import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../redux/apiCalls";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.allUsers.users);
    console.log('users: ', users);

    // const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    };



    useEffect(() => {
        getAllUsers(dispatch);
    }, [dispatch]);

    const columns = [
        {
            field: 'username',
            headerName: 'User',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt={params.row.username} />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'isAdmin', headerName: 'Type Account', width: 80
        },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteIcon
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        }
    ];

    return (
        <>

            <div className="userList">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Manage User</h1>
                    <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link>
                </div>
                <DataGrid
                    rows={users}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={5}
                    getRowId={(row) => row._id}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>

    )
}

export default UserList