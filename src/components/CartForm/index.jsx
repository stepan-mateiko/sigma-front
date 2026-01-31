import propTypes from "prop-types";

import Button from "../Button";
import {
  API_LINK,
  CART_FORM_FIELDS,
  CART_FORM_TEXTAREA,
  CART_FORM_BUTTON,
} from "../../helpers/constants";

const CartForm = ({ cart, setCart, totalPrice, totalDiscount, setIsForm }) => {
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
    localStorage.clear();
    setCart([]);
    try {
      const response = await handleAddToOrder(order);
      setIsForm(false);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  async function handleAddToOrder(order) {
    try {
      const response = await fetch(`${API_LINK}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error adding to order: " + error.message);
    }
  }
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
