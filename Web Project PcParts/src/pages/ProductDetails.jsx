import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetails(props) {
  const product = props.product

  return (
    <section className="container page-section">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / Product details
      </p>

      <div className="details-layout">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <h2 className="detail-price">${product.price}</h2>
          <p className="muted">{product.description}</p>
          <button className="btn btn-primary add-wide" onClick={() => props.addToCart(product)}>
            Add to cart
          </button>
          <p className="small-note">
            Product details and prices are sample information for this student project.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
