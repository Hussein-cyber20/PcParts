import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  const product = props.product

  const openDetails = () => {
    props.setSelectedProduct(product)
  }

  return (
    <div className="product-card">
      <Link to="/product-details" className="product-image" onClick={openDetails}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <Link to="/product-details" className="product-name" onClick={openDetails}>
          {product.name}
        </Link>

        <div className="product-bottom">
          <strong>${product.price}</strong>
          <button className="small-add" onClick={() => props.addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
