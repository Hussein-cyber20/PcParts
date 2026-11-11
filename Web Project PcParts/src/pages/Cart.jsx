
import React from 'react'
import { Link } from 'react-router-dom'

function Cart(props) {
  let total = 0

  for (let i = 0; i < props.cart.length; i++) {
    total = total + props.cart[i].price
  }

  return (
    <section className="container page-section">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1 className="page-title">Shopping cart</h1>

      {props.cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Find something for your next PC build.</p>
          <Link to="/products" className="btn btn-primary">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {props.cart.map((product, index) => (
              <div className="cart-item" key={index}>
                <img src={product.image} alt={product.name} />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <strong>${product.price}</strong>
                </div>
                <button
                  className="remove-button"
                  onClick={() => props.removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order summary</h2>
            <div>
              <span>Products</span>
              <strong>{props.cart.length}</strong>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>${total}</strong>
            </div>
            <button
              className="btn btn-primary checkout-button"
              onClick={() => alert('Thank you for your order!')}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
