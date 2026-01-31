import propTypes from "prop-types";

import Button from "../Button";
import {
  CART_FORM_FIELDS,
  CART_FORM_TEXTAREA,
  CART_FORM_BUTTON,
} from "../../helpers/constants";
import { addOrder } from "../../helpers/api";
import { useCart } from "../../context/CartContext";

const CartForm = ({ totalPrice, totalDiscount, setIsForm }) => {
  const { cart, clearCart } = useCart();
  const confirmOrder = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const address = e.target.elements.address.value;
    const phone = e.target.elements.phone.value;
    const additionalNotes = e.target.elements.additionalNotes.value;

    const order = {
      customer: {
        name,
        email,
        address,
        phone,
        additionalNotes,
      },
      products: cart.map((product) => ({
        ...product,
        total: product.price * product.quantity,
      })),
      price: totalPrice,
      discount: totalDiscount,
    };
    clearCart();
    await addOrder(order);
    setIsForm(false);
  };

  return (
    <form onSubmit={confirmOrder} className="cart__form">
      {CART_FORM_FIELDS.map(
        ({ label, name, type, placeholder, pattern, title, required }) => (
          <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              pattern={pattern}
              title={title}
              required={required}
            />
          </div>
        ),
      )}
      <div>
        <label htmlFor={CART_FORM_TEXTAREA.name}>
          {CART_FORM_TEXTAREA.label}
        </label>
        <textarea
          name={CART_FORM_TEXTAREA.name}
          placeholder={CART_FORM_TEXTAREA.placeholder}
        />
      </div>

      <Button {...CART_FORM_BUTTON} />
    </form>
  );
};

export default CartForm;

CartForm.propTypes = {
  cart: propTypes.array,
  setCart: propTypes.func,
  totalPrice: propTypes.number,
  totalDiscount: propTypes.number,
  setIsForm: propTypes.func,
};
