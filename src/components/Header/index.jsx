import { NavLink } from "react-router-dom";
import { Logo, CartIcon } from "../Icon";
import { HEADER_LINKS } from "../../helpers/constants";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <Logo className="header__logo" />
      <nav className="header__nav">
        <NavLink className="header__nav-item" to="">
          {HEADER_LINKS.home}
        </NavLink>
        <NavLink className="header__nav-item" to="/cart">
          {HEADER_LINKS.cart}
        </NavLink>
        <NavLink className="header__nav-item" to="/orders">
          {HEADER_LINKS.orders}
        </NavLink>
      </nav>
      <div className="header__cart">
        <NavLink className="header__nav-item" to="/cart">
          <CartIcon />
        </NavLink>
        {HEADER_LINKS.cart}({<span>{cartCount}</span>})
      </div>
    </header>
  );
};

export default Header;
