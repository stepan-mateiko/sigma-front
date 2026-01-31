import propTypes from "prop-types";

import Button from "../Button";
import { API_LINK, CART_LIST_TEXT } from "../../helpers/constants";

const CartList = ({ cart, setCart, totalPrice, totalDiscount }) => {
  const changeAmount = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product._id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  };

  const deleteProduct = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {cart.length === 0 ? (
        <p className="cart__empty">{CART_LIST_TEXT.empty}</p>
      ) : (
        <div className="cart__container">
          <ul className="cart__wrapper">
            {cart.map((product, index) => (
              <li className="cart__card" key={index}>
                <img
                  src={`${API_LINK}${product.image}`}
                  alt={`${product.name} image`}
                />
                <p>{product.name}</p>
                <p className="cart__discount-price">
                  ${product.discount_price}.00
                </p>
                <p>${product.price}.00</p>
                <form>
                  {CART_LIST_TEXT.quantity}
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      changeAmount(product._id, newQuantity);
                    }}
                  />
                  <Button text={"X"} handler={() => deleteProduct(product)} />
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
