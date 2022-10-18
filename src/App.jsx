import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import MyLoginGoogle from './pages/MyLoginGoogle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import HNLoginGG from './pages/HNLoginGG';

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:category" element={<ProductList />}></Route>
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route path="login" element={user ? < Navigate to="/" /> : <Login />} />
          <Route path="register" element={user ? < Navigate to="/" /> : <Register />} />
          <Route path="dashboard" element={user ? < Navigate to="/" /> : <Dashboard />} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
