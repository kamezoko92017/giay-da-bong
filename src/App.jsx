import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />}>

          </Route>
          <Route path="products/:category" element={<ProductList />}></Route>
          <Route path="product/:id" element={<Product />} />
          <Route path="login" element={user ? < Navigate to="/" /> : <Login />}>

          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={user ? < Navigate to="/" /> : <Register />} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
