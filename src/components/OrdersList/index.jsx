import { useState, useEffect } from "react";
import axios from "axios";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "https://sigma-online-store.onrender.com/api/orders"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="orders">
      <h2 className="orders__heading">Orders</h2>
      {orders.length === 0 ? (
        <p className="orders__empty">No orders available.</p>
      ) : (
        <ul className="orders__wrapper">
          {orders.map((order, index) => (
            <li key={index} className="orders__card">
              <div className="order__id">
                <h3>Order ID:</h3>
                <p>{order._id}</p>
              </div>
              <div className="order__products">
                <h3>Products:</h3>
                <ul className="order__products-list">
                  {order.products.map((product, productIndex) => (
                    <li key={productIndex}>
                      {product.name} (Quantity: {product.quantity})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order__price">
                <h3>Sum:</h3>
                <p>Price: ${order.price}.00</p>
                <p>Discount: ${order.discount}.00</p>
              </div>
              <div className="order__customer">
                <h3>Customer:</h3>
                <p>Name: {order.customer.name}</p>
                <p>Email: {order.customer.email}</p>
                <p>Address: {order.customer.address}</p>
                <p>Telephone: {order.customer.phone}</p>
              </div>
              <div className="order__message">
                <h3>Extra Notes:</h3>
                <p>{order.customer.additionalNotes}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersList;
