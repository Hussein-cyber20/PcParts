import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products(props) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', 'Graphics Cards', 'Processors', 'Memory', 'Storage',
    'Motherboards', 'Power Supplies', 'Cases', 'Cooling']

  const shownProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || product.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <section className="page-section container">
      <div className="section-heading products-title">
        <div>
          <p className="eyebrow">THE PC PARTS COLLECTION</p>
          <h1>All products</h1>
          <p className="muted">Browse parts for your next setup.</p>
        </div>
        <p className="result-count">{shownProducts.length} products</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <select value={category} onChange={event => setCategory(event.target.value)}>
          {categories.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>

      {shownProducts.length > 0 ? (
        <div className="product-grid">
          {shownProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={props.addToCart}
              setSelectedProduct={props.setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try another search or category.</p>
          <button className="btn btn-primary" onClick={() => {
            setSearch('')
            setCategory('All')
          }}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}

export default Products
