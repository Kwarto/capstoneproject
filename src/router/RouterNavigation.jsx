import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Categories from '../pages/Categories/Categories'
import Cart from '../pages/Cart/Cart'
import EmptyCart from '../pages/Cart/EmptyCart'
import Login from '../pages/Account/Login/Login'
import Register from '../pages/Account/Register/Register'
import Checkout from '../pages/Checkout/Checkout';
import Error from '../pages/Error/ErrorPage'
import Order from '../pages/Order/OrderStatus'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

function RouterNavigation() {
  return (
    <>
      <Router>
        <NavBar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/empty-cart' element={<EmptyCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/oder-received' element={<Order />} />
          <Route path='/error404' element={<Error />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
         </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default RouterNavigation