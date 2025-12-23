import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './pages/header'
import Footer from './pages/footer'
import Product from './pages/product'
import Collection from './pages/colloection'
import Slider from './pages/slider'
import Cart from './pages/cart'
import Checkout from './pages/checkout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div style={{ minHeight: '100vh' }}>
            <Slider />
            <Product />
            <Collection />
          </div>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
