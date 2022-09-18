import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  let admin = "";
  const s = useSelector((state) => state);
  admin = s.user.currentUser ? s.user.currentUser.isAdmin : "";

  return (
    <div>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
      {admin && (
        <>
          <Router>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>

                <Route path="/" element={<Home />} />
                <Route path="users" element={<UserList />} />
                <Route path="user/:userId" element={<User />} />
                <Route path="newUser" element={<NewUser />} />
                <Route path="products" element={<ProductList />} />
                <Route path="product/:productId" element={<Product />} />
                <Route path="newproduct" element={<NewProduct />} />

              </Routes>
            </div>
          </Router>
        </>
      )}
    </div >
  );
}

export default App;
