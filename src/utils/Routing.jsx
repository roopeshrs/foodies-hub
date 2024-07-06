import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Orders from '../pages/Orders'
import NotFound from '../pages/NotFound'
import Menu from '../pages/Menu'
import Checkout from '../pages/Checkout'
import PaymentSuccess from '../pages/PaymentSuccess'
import ProtectedRoute from '../components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={
              <ProtectedRoute>
                  <Checkout />
              </ProtectedRoute>
            } />
            <Route path='/success' element={<PaymentSuccess />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </>
  )
}

export default Routing
