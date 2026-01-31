import { useState, useEffect } from "react";
import axios from "axios";
import { API_LINK, ORDERS } from "../../helpers/constants";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_LINK}/api/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="orders">
      <h2 className="orders__heading">{ORDERS.heading}</h2>
      {orders.length === 0 ? (
        <p className="orders__empty">{ORDERS.empty}</p>
      ) : (
        <ul className="orders__wrapper">
          {orders.map((order, index) => (
            <li key={index} className="orders__card">
              <div className="order__id">
                <h3>{ORDERS.id}</h3>
                <p>{order._id}</p>
              </div>
              <div className="order__products">
                <h3>{ORDERS.products}</h3>
                <ul className="order__products-list">
                  {order.products.map((product, productIndex) => (
                    <li key={productIndex}>
                      {product.name} (Quantity: {product.quantity})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order__price">
                <h3>{ORDERS.price.sum}</h3>
                <p>
                  {ORDERS.price.price} ${order.price}.00
                </p>
                <p>
                  {ORDERS.price.discount} ${order.discount}.00
                </p>
              </div>
              <div className="order__customer">
                <h3>Customer:</h3>
                <p>
                  {ORDERS.customer.name} {order.customer.name}
                </p>
                <p>
                  {ORDERS.customer.email} {order.customer.email}
                </p>
                <p>
                  {ORDERS.customer.address} {order.customer.address}
                </p>
                <p>
                  {ORDERS.customer.telephone} {order.customer.phone}
                </p>
              </div>
              <div className="order__message">
                <h3>{ORDERS.message}</h3>
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
