import { useState, useEffect } from "react";
import { fetchOrders } from "../../helpers/api";
import { ORDERS } from "../../helpers/constants";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const data = await fetchOrders();
      setOrders(data);
    } catch (error) {
      console.error("Failed to load orders", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="orders">
        <h2 className="orders__heading">{ORDERS.heading}</h2>
        <p className="orders__loading">Loading orders...</p>
        <div className="orders__loader">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h2 className="orders__heading">{ORDERS.heading}</h2>
      {orders.length === 0 ? (
        <p className="orders__empty">{ORDERS.empty}</p>
      ) : (
        <ul className="orders__wrapper">
          {orders.map((order) => (
            <li key={order._id} className="orders__card">
              <div className="order__id">
                <h3>{ORDERS.id}</h3>
                <p>{order._id}</p>
              </div>

              <div className="order__products">
                <h3>{ORDERS.products}</h3>
                <ul className="order__products-list">
                  {order.products.map((product) => (
                    <li key={product._id}>
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
