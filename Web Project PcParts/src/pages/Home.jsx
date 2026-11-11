import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home(props) {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">PC PARTS AND ACCESSORIES</p>
            <h1>Build your setup.<br /><span>Make it yours.</span></h1>
            <p className="hero-text">
              Find computer components for your next PC build, upgrade or gaming setup.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">Explore products</Link>
              <Link to="/about" className="btn btn-outline">About PcParts</Link>
            </div>
          </div>

          <div className="hero-art">
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1100&q=90"
              alt="Computer setup"
            />
          </div>
        </div>
      </section>

      <section className="container benefits">
        <div><strong>PC Components</strong><small>Parts for your build</small></div>
        <div><strong>Easy Browsing</strong><small>Find parts by category</small></div>
        <div><strong>Simple Cart</strong><small>Manage your products</small></div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR PRODUCTS</p>
            <h2>Featured products</h2>
          </div>
          <Link to="/products" className="text-link">View all products</Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={props.addToCart}
              setSelectedProduct={props.setSelectedProduct}
            />
          ))}
        </div>
      </section>

      <section className="build-banner">
        <div className="container build-banner-inner">
          <div>
            <p className="eyebrow">YOUR NEXT BUILD STARTS HERE</p>
            <h2>Good parts make a great PC.</h2>
          </div>
          <Link to="/products" className="btn btn-primary">Shop components</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
