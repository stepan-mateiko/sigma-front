import { NavLink } from "react-router-dom";

import { Logo, CartIcon } from "../Icon";
import { useEffect, useState } from "react";

const Header = () => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const originalCart = JSON.parse(localStorage.getItem("cart")) || [];
    const uniqueProductsMap = originalCart.reduce((map, product) => {
      const existingProduct = map.get(product._id);
      if (existingProduct) {
        existingProduct.quantity =
          parseInt(existingProduct.quantity) + parseInt(product.quantity);
      } else {
        map.set(product._id, { ...product });
      }
      return map;
    }, new Map());

    const cart = Array.from(uniqueProductsMap.values());
    setCartLength(cart.length);
  }, [localStorage.getItem("cart")]);

  return (
    <header className="header">
      <Logo className="header__logo" />
      <nav className="header__nav">
        <NavLink className="header__nav-item" to="">
          Home
        </NavLink>
        <NavLink className="header__nav-item" to="/cart">
          Cart
        </NavLink>
        <NavLink className="header__nav-item" to="/orders">
          Orders
        </NavLink>
      </nav>
      <div className="header__cart">
        <CartIcon /> Cart({<span>{cartLength}</span>})
      </div>
    </header>
  );
};

export default Header;
