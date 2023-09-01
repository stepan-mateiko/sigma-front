import propTypes from "prop-types";

import { ButtonArrow } from "../Icon";

const Button = ({ className, text, handler, arrow }) => {
  return (
    <button className={className} onClick={handler}>
      {text} {arrow && <ButtonArrow />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string,
  handler: propTypes.func,
  arrow: propTypes.bool,
};
