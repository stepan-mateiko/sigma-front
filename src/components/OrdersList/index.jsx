import { useState, useEffect } from "react";
import { fetchOrders, deleteOrder } from "../../helpers/api";
import { ORDERS } from "../../helpers/constants";
import Button from "../Button";

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

  const handleDeleteOrder = async (id) => {
    await deleteOrder(id);
    const data = await fetchOrders();
    setOrders(data);
  };

  if (loading) {
    return (
      <div className="orders">
        <h2 className="orders__heading">{ORDERS.heading}</h2>
        <p className="orders__loading">Loading orders...</p>
        <div className="orders__loader">
          <div className="spinner" />
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
        <div className="orders__table-wrapper">
          <table className="orders__table">
            <thead>
              <tr>
                <th>{ORDERS.id}</th>
                <th>{ORDERS.products}</th>
                <th>{ORDERS.price.sum}</th>
                <th>{ORDERS.customer.title ?? "Customer"}</th>
                <th>{ORDERS.message}</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="orders__data">
                  <td>
                    {order._id}
                    <Button
                      className="orders__button"
                      text="❌ Delete"
                      handler={() => {
                        handleDeleteOrder(order._id);
                      }}
                    />
                  </td>

                  <td>
                    <ul className="orders__products-list">
                      {order.products.map((product) => (
                        <li key={product._id}>
                          {product.name} × {product.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td>
                    <p>
                      <b>{ORDERS.price.price}</b> ${order.price}.00
                    </p>
                    <p>
                      <b> {ORDERS.price.discount}</b> ${order.discount}.00
                    </p>
                  </td>

                  <td>
                    <p>
                      <b> {ORDERS.customer.name}</b> {order.customer.name}
                    </p>
                    <p>
                      <b>{ORDERS.customer.email}</b> {order.customer.email}
                    </p>
                    <p>
                      <b>{ORDERS.customer.address}</b> {order.customer.address}
                    </p>
                    <p>
                      <b>{ORDERS.customer.telephone} </b>
                      {order.customer.phone}
                    </p>
                  </td>

                  <td>
                    <i>{order.customer.additionalNotes || "-"}</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersList;
