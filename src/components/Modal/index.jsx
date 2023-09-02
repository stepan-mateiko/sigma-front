import ReactModal from "react-modal";
import { useState } from "react";
import propTypes from "prop-types";

import Button from "../Button";

const Modal = ({ isModalOpen, handleModalClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdditionalText, setAdditionalText] = useState(false);
  const [descriptionClass, setDescriptionClass] = useState(
    "modal__btn active-btn "
  );
  const [additionalClass, setAdditionalClass] = useState(
    "modal__btn not-active-btn"
  );

  const showAdditionalText = () => {
    setAdditionalText(true);
    setAdditionalClass("modal__btn active-btn");
    setDescriptionClass("modal__btn not-active-btn");
  };
  const hideAdditionalText = () => {
    setAdditionalText(false);
    setAdditionalClass("modal__btn not-active-btn");
    setDescriptionClass("modal__btn active-btn");
  };

  const addToCart = () => {
    const productWithQuantity = {
      ...product,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, productWithQuantity];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={"modal"}
      style={{ overlay: { zIndex: 10 } }}
    >
      <div className="modal__container">
        <div className="modal__image">
          <p className="modal__category">{product.category}</p>
          <img
            src={`https://sigma-online-store.onrender.com${product.image}`}
            alt={`${product.name} image`}
          />
        </div>
        <div className="modal__info">
          <h2 className="modal__heading">{product.name}</h2>
          <p className="modal__rate">
            {[...Array(product.rate)].map((_, index) => (
              <span key={index}>★</span>
            ))}
          </p>
          <div className="modal__pricing">
            {product.discount && (
              <p className="modal__discount-price">
                ${product.discount_price}.00
              </p>
            )}
            <p className="modal__price">{`$${product.price}.00`}</p>
          </div>
          <p className="modal__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <form className="modal__form">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Button text={"Add"} handler={addToCart} />
          </form>
        </div>
      </div>
      <div className="modal__footer">
        <Button
          className={descriptionClass}
          handler={hideAdditionalText}
          text={"Product Description"}
        />
        <Button
          className={additionalClass}
          handler={showAdditionalText}
          text={" Additional Info"}
        />

        {!isAdditionalText && (
          <p className="modal__description">
            This is Main Description - Welcome to the world of natural and
            organic. Here you can discover the bounty of nature. We have grown
            on the principles of health, ecology, and care. We aim to give our
            customers a healthy chemical-free meal for perfect nutrition. It
            offers about 8–10% carbs. Simple sugars — such as glucose and
            fructose — make up 70% and 80% of the carbs in raw.
          </p>
        )}
        {isAdditionalText && (
          <p className="modal__additional">
            This is Additional Text - Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Libero officia ipsa expedita repellat, voluptatum
            quo modi quia optio quae aliquid debitis alias est aliquam aut ut
            saepe. Sed, deserunt eius.
          </p>
        )}
      </div>
      <Button
        handler={handleModalClose}
        className={"modal__close-btn"}
        text={"X"}
      />
    </ReactModal>
  );
};
export default Modal;

Modal.propTypes = {
  isModalOpen: propTypes.bool,
  handleModalClose: propTypes.func,
  product: propTypes.object,
};
