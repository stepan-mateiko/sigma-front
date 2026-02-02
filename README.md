# 🛒 React E-Commerce Application

A full-stack e-commerce web application built with **React** on the frontend and **Node.JS backend**, both developed by me.

The project demonstrates modern React patterns, global state management with Context, modal interactions, API communication, and cart persistence using `localStorage`.

---

## Features

- Product catalog with API data fetching
- Product preview modal with detailed info
- Cart management (add / remove / update quantity)
- Cart persistence via `localStorage`
- Order creation and submission to backend
- Orders history page
- Orders deleting from database
- Loading and empty states
- Accessibility-friendly structure
- Responsive layout

---

## 🖼 Screenshots

/screenshots
├── home-page.png
├── product-modal.png
├── cart-page.png
└── orders-list.png

````

Example:

```md
<img width="1242" height="791" alt="image" src="https://github.com/user-attachments/assets/2e366c77-eca3-4ebf-9a4b-3f2de8ad130a" />

<img width="1399" height="760" alt="image" src="https://github.com/user-attachments/assets/ebc6c4f9-960c-4cff-b226-bbc6d760d0ef" />

<img width="779" height="644" alt="image" src="https://github.com/user-attachments/assets/45a5eddc-e7ad-49c9-81f2-432e9acc6044" />

<img width="1204" height="583" alt="image" src="https://github.com/user-attachments/assets/5e83000f-29e9-4edc-9559-fb9d71e30a00" />

````

---

## Tech Stack

### Frontend

- **React 18**
- **React Router v6**
- **React Context API**
- **React Modal**
- **Axios**
- **SCSS (SASS)**
- **PropTypes**
- **React Swiper**

### Backend

- **Node.JS**
- **Express.JS**
- **MongoDB**
- Handles:
  - Products fetching
  - Order creation
  - Orders retrieval

> ✅ Backend was **fully implemented by me** and integrated with the frontend via API calls.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Button/
│   ├── Header/
│   ├── Footer/
│   ├── Modal/
│   ├── ProductCard/
│   ├── ProductList/
│   ├── CartList/
│   ├── CartForm/
│   ├── OrdersList/
│   ├── News/
│   └── Pages/
│
├── context/
│   └── CartContext.jsx
│
├── helpers/
│   ├── api.js
│   └── constants.js
│
├── styles/
│   ├── _variables.scss
│   └── main.scss
│
└── App.jsx
```

---

## 🛒 Cart Architecture

Cart state is managed globally using **React Context**.

### Cart functionality:

- Add products from modal
- Merge quantities for the same product
- Update quantity from cart page
- Remove items
- Clear cart after successful order
- Sync cart state with `localStorage`

```js
localStorage.setItem("cart", JSON.stringify(cart));
```

Cart state is restored on application load.

---

## 🧾 Orders

- Orders are fetched from the backend
- Displayed in a structured, readable layout
- Each order contains:
  - Order ID
  - Products with quantities
  - Total price and discount
  - Customer information
  - Additional notes
- Orders can be deleted from database

---

## Key Components

### `ProductList`

- Fetches products from API
- Supports “Load More / Show Less”
- Opens product modal

### `Modal`

- Displays product details
- Quantity input
- Adds product to cart
- Accessible modal handling

### `CartList`

- Displays cart items
- Allows quantity updates
- Shows total price and discount

### `CartForm`

- Collects customer information
- Sends order to backend
- Clears cart after submission

### `OrdersList`

- Fetches and displays all orders
- Shows loading spinner and empty state
- Possibility to delete order

---

## Accessibility

- Semantic HTML structure
- Proper `label` usage for inputs
- Meaningful `alt` text for images
- Keyboard-friendly modal behavior
- Screen-reader–friendly patterns

---

## Installation & Run

```bash
git clone https://github.com/your-username/react-ecommerce-app.git
cd frontend
npm install
npm start
```

---

## Configuration

API endpoints are configured in:

```js
helpers / constants.js;
```

---

## Possible Improvements

- Authentication & user accounts
- Pagination for orders
- Product filtering & sorting
- Server-side cart persistence
- Unit and integration tests
- Dark mode

---

## Author

**Stepan Mateiko**
Junior Frontend Developer (React)

- Frontend: ✅ Developed by me
- Backend: ✅ Developed by me

---

## 📄 License

This project was created for educational and portfolio purposes.
