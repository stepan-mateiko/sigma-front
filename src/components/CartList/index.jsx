import propTypes from "prop-types";

import Button from "../Button";
import { API_LINK, CART_LIST_TEXT } from "../../helpers/constants";
import { useCart } from "../../context/CartContext";

const CartList = ({ totalPrice, totalDiscount }) => {
  const { updateQuantity, removeFromCart, cart } = useCart();

  return (
    <>
      {cart.length === 0 ? (
        <p className="cart__empty">{CART_LIST_TEXT.empty}</p>
      ) : (
        <div className="cart__container">
          <ul className="cart__wrapper">
            {cart.map((product, index) => (
              <li className="cart__card" key={product._id}>
                <img
                  src={`${API_LINK}${product.image}`}
                  alt={`${product.name} image`}
                />
                <p>{product.name}</p>
                <p className="cart__discount-price">
                  ${product.discount_price}.00
                </p>
                <p>${product.price}.00</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  {CART_LIST_TEXT.quantity}
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(product._id, Number(e.target.value))
                    }
                  />
                  <Button
                    text={"X"}
                    handler={() => removeFromCart(product._id)}
                  />
                </form>
              </li>
            ))}
          </ul>
          <div className="cart__total">
            <p>
              {CART_LIST_TEXT.totalPrice} ${totalPrice}.00
            </p>
            <p>
              {CART_LIST_TEXT.totalDiscount} ${totalDiscount}.00
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CartList;

CartList.propTypes = {
  cart: propTypes.array,
  setCart: propTypes.func,
  totalPrice: propTypes.number,
  totalDiscount: propTypes.number,
};
