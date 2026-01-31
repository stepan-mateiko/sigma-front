import propTypes from "prop-types";
import { API_LINK } from "../../helpers/constants";

const ProductCard = (props) => {
  const {
    className,
    category,
    handler,
    image,
    name,
    discount,
    discountPrice,
    price,
    rate,
  } = props;

  return (
    <div className={`${className}__card`} onClick={handler}>
      <p className={`${className}__category`}>{category}</p>
      <img
        src={className === "products" ? `${API_LINK}${image}` : image}
        alt={`${name} image`}
        className={`${className}__image`}
      />
      <h4 className={`${className}__card-heading`}>{name}</h4>
      <hr />
      <div className={`${className}__footer`}>
        {discount && (
          <p className={`${className}__discount-price`}>${discountPrice}.00</p>
        )}

        <p className={`${className}__price`}>{`$${price}.00`}</p>
        <p className={`${className}__rate`}>
          {[...Array(rate)].map((_, index) => (
            <span key={index}>★</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  className: propTypes.string,
  category: propTypes.string,
  handler: propTypes.func,
  image: propTypes.string,
  name: propTypes.string,
  discount: propTypes.bool,
  discountPrice: propTypes.number,
  price: propTypes.number,
  rate: propTypes.number,
};
