import { useState } from "react";
import CartImage from "../../../assets/images/cart-header-img.png";
import CartList from "../../CartList";
import CartForm from "../../CartForm";
import Button from "../../Button";

const CartPage = () => {
  const originalCart = JSON.parse(localStorage.getItem("cart")) || [];

  const uniqueProductsMap = originalCart.reduce((map, product) => {
    const existingProduct = map.get(product._id);
    if (existingProduct) {
      existingProduct.quantity =
        parseInt(existingProduct.quantity) + parseInt(product.quantity);
    } else {
      map.set(product._id, { ...product });
    }
    return map;
  }, new Map());

  const [cart, setCart] = useState(Array.from(uniqueProductsMap.values()));
  const [isForm, setIsForm] = useState(false);

  let totalPrice = 0;
  let totalDiscount = 0;
  cart.forEach((product) => {
    totalPrice += product.price * product.quantity;
    totalDiscount +=
      (product.discount_price - product.price) * product.quantity;
  });

  const showForm = () => {
    setIsForm(true);
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__heading">Cart</h2>
        <img src={CartImage} alt="cart image" className="cart__image" />
      </div>
      <CartList
        cart={cart}
        setCart={setCart}
        totalPrice={totalPrice}
        totalDiscount={totalDiscount}
      />
      {!isForm && (
        <Button className={"cart__btn"} handler={showForm} text={"To Order"} />
      )}

      {isForm && (
        <CartForm
          cart={cart}
          setCart={setCart}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          setIsForm={setIsForm}
        />
      )}
    </div>
  );
};

export default CartPage;
