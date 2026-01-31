import { useState } from "react";
import CartImage from "../../../assets/images/cart-header-img.png";
import CartList from "../../CartList";
import CartForm from "../../CartForm";
import Button from "../../Button";
import { useCart } from "../../../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();
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
      <CartList totalPrice={totalPrice} totalDiscount={totalDiscount} />
      {!isForm && (
        <Button className={"cart__btn"} handler={showForm} text={"To Order"} />
      )}

      {isForm && (
        <CartForm
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          setIsForm={setIsForm}
        />
      )}
    </div>
  );
};

export default CartPage;
