import propTypes from "prop-types";

import Button from "../Button";

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
      console.log("Order response:", response);
      setIsForm(false);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  async function handleAddToOrder(order) {
    try {
      const response = await fetch(
        "https://sigma-online-store.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order }),
        }
      );
      const data = await response.json();
      console.log("Added to order:", data);
      return data;
    } catch (error) {
      throw new Error("Error adding to order: " + error.message);
    }
  }
  return (
    <form onSubmit={confirmOrder} className="cart__form">
      <label htmlFor="name">Full name*</label>
      <input
        type="text"
        name="name"
        pattern="^[A-Z][a-z]+ [A-Z][a-z]+$"
        title="Please enter your full name with both words starting with capital letters."
        placeholder="Enter your full name....."
        required
      />
      <label htmlFor="email">Your Email*</label>
      <input
        type="email"
        name="email"
        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address in the format user@example.com."
        placeholder="Enter your e-mail....."
        required
      />
      <label htmlFor="address">Address*</label>
      <input
        type="text"
        name="address"
        placeholder="Enter your address....."
        required
      />
      <label htmlFor="phone">Phone Number*</label>
      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone number....."
        pattern="^(\+380\d{9})$"
        title="Please enter a valid phone number starting with +380 followed by 9 digits."
        required
      />
      <label htmlFor="additionalNotes">Message</label>
      <textarea
        name="additionalNotes"
        placeholder="Additional Notes"
      ></textarea>
      <Button type="submit" text={"Confirm"} />
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
