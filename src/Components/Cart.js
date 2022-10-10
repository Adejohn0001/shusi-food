import React from "react";
import { useCart } from "react-use-cart";
import styled from "styled-components";
import Nav from "./Nav";

const StyleCart = styled.div`
  display: flex;
  padding: 10px 40px 0px 10px;
  margin: 0 auto;
  width: 95%;

  .nav-dashed {
    flex: 25%;
  }

  .cart-img {
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin-bottom: 1.5rem;
  }
  .item-carts {
    flex: 100%;
    padding: 30px 15px;
    margin-right: 0rem;
  }

  .item-cart {
    background: #f1d5bb;
    border-radius: 3px;
    padding: 30px 15px;
    margin-top: 1rem;
  }

  .items {
    display: flex;
  }
  .title-price {
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    margin-left: 1rem;
  }
  .item-cart2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    color: #000000;
  }

  .add-sub-btn {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    border: none;
    background-color: #f1d5bb;
    color: #000000;
  }

  .price {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
  }

  .rm-btn {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    color: #000000;
    cursor: pointer;
  }

  .cart-title {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 63px;
    color: #000000;
    border-bottom: 3px solid #f1d5bb;
    margin-top: -0.5rem;
    width: 15%;
  }

  .total-segment {
    flex: 40%;
    margin-left: 1rem;
    margin-top: 6.5rem;
    border-radius: 3px;
  }
  .money-section {
    background-color: #f1d5bb;
    padding: 15px 30px;
    border-radius: 3px;
  }
  .your-subtotal {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 50px;
    color: #000000;
  }

  .total {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 1rem;
  }

  .confirm-order {
    background: #000000;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;
    color: #ffffff;
    padding: 3px 10px;
    width: 100%;
    margin-top: 1rem;
  }

  .bonus-section {
    padding: 15px 30px;
    border: 2px solid #f1d5bb;
    border-radius: 3px;
  }
  .promo {
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #f1d5bb;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 38px;
    color: rgba(0, 0, 0, 0.6);
    padding: 0px 10px;
    margin: 0.7rem 0rem 1.5rem;
  }

  .apply-btn {
    background: #000000;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 38px;
    color: #ffffff;
    padding: 0px 10px;
    margin-bottom: 0.4rem;
  }

  .add-sub {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quantity {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    background-color: white;
    padding:0px 6px;
    margin:0rem 0.3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .item-carts {
      flex: 100%;
      padding: 30px 15px;
      margin-left: 8rem;
    }

    .total-segment {
      flex: 40%;
      margin-left: 9rem;
      margin-right:1rem;
      margin-top: 6.5rem;
      border-radius: 3px;
    }
  }

  @media (max-width:578px) {
    display: flex;
    padding: 10px 20px 0px 10px;
    margin: 0 auto;
    width: 99%;

    .item-carts {
      flex: 100%;
      padding: 30px 15px;
      margin-left: 5rem;
    }

    .total-segment {
      flex: 40%;
      margin-left: 6rem;
      margin-right:1rem;
      margin-top: 6.5rem;
      border-radius: 3px;
    }
  }

  @media (max-width:478px) {
    display: flex;
    padding: 10px 50px 0px 5px;
    margin: 0 auto;
    width: 100%;

    .item-carts {
      flex: 100%;
      padding: 30px 15px;
      margin-left: 3.5rem;
      margin-right: -3rem;
    }

    .total-segment {
      flex: 40%;
      margin-left: 4.5rem;
      margin-right:-2rem;
      margin-top: 6.5rem;
      border-radius: 3px;
    }
  }
`;

const Cart = () => {
  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();

  return (
    <StyleCart className="flex">
      <div className="nav-dashed">
        {" "}
        <Nav />{" "}
      </div>
      <div className="item-carts">
        <p className="cart-title">CART</p>
        <div className="item-cart">
          {items.map((item, id) => {
            return (
              <div key={id} className="item-cart2">
                <div className="items">
                  <div>
                    <div>
                      <img src={item.img} alt="menu" className="cart-img" />
                    </div>
                  </div>
                  <div className="title-price">
                    <td className="title">{item.title}</td>
                    <td className="price">${item.price}.00</td>
                  </div>
                </div>
                <div className="add-sub">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    className="add-sub-btn"
                  >
                    -
                  </button>
                  <p className="quantity">{item.quantity}</p>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="add-sub-btn"
                  >
                    +
                  </button>
                </div>

                <p className="rm-btn" onClick={() => removeItem(item.id)}>
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-segment">
        <div className="money-section">
          <p className="your-subtotal">YOUR SUBTOTAL</p>
          <p className="total">
            Subtotal <span> ${cartTotal}.00</span>
          </p>
          <button className="confirm-order">Confirm Order</button>
        </div>

        <div className="bonus-section">
          <p className="your-subtotal">Promo Code</p>
          <input
            type="text"
            name="promo-code"
            className="promo"
            placeholder="enter promo code"
          />
          <button className="apply-btn">Apply</button>
        </div>
      </div>
      <div></div>
    </StyleCart>
  );
};

export default Cart;
