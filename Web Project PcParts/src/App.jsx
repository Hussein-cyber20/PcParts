import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { products } from './data/products'

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('pcparts-cart')
    if (savedCart) {
      return JSON.parse(savedCart)
    }
    return []
  })

  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const addToCart = (product) => {
    const updatedCart = [...cart, product]
    setCart(updatedCart)
    localStorage.setItem('pcparts-cart', JSON.stringify(updatedCart))
    alert('Product added to cart!')
  }

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, itemIndex) => itemIndex !== index)
    setCart(updatedCart)
    localStorage.setItem('pcparts-cart', JSON.stringify(updatedCart))
  }

  return (
    <div className="app">
        <NavBar cartCount={cart.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} setSelectedProduct={setSelectedProduct} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products addToCart={addToCart} setSelectedProduct={setSelectedProduct} />} />
            <Route path="/product-details" element={<ProductDetails product={selectedProduct} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App
