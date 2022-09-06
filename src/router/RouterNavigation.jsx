import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Account from '../pages/Account/Account';
import MyAccount from '../pages/MyAccount/MyAccount';
import Categories from '../pages/Categories/Categories'
import Cart from '../pages/Cart/Cart'
import EmptyCart from '../pages/Cart/EmptyCart'
import Login from '../pages/Account/Login/Login'
import Register from '../pages/Account/Register/Register'
import Checkout from '../pages/Checkout/Checkout';
import OrderReceived from '../pages/Order/OrderStatus'
import ErrorPage from '../pages/Error/ErrorPage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'


function RouterNavigation() {
  return (
    <>
      <Router>
        <NavBar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='categories' element={<Categories />} />
          <Route path='cart' element={<Cart />} />
          <Route path='empty_cart' element={<EmptyCart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order_received' element={<OrderReceived />} />
          <Route path='error_page_404' element={<ErrorPage />} />
          <Route path='account' element={<Account />} />
          <Route path='my-account' element={<MyAccount />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
         </Routes>
         <Footer/>
      </Router>
    </>
  )
}

export default RouterNavigation