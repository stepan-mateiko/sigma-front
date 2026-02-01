import { API_LINK } from "./constants";
import axios from "axios";

export const addOrder = async (order) => {
  try {
    const response = await axios.post(`${API_LINK}/api/orders`, { order });
    return response.data;
  } catch (error) {
    throw new Error("Error adding to order: " + error.message);
  }
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_LINK}/api/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_LINK}/api/products`);

    return response.data.sort((a, b) => {
      if (a.discount === b.discount) return 0;
      return a.discount ? -1 : 1;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  await axios.delete(`${API_LINK}/api/orders/${orderId}`);
};
