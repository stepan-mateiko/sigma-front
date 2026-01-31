import ReactModal from "react-modal";
import { useState } from "react";
import propTypes from "prop-types";

import Button from "../Button";
import { API_LINK, MODAL } from "../../helpers/constants";
import { useCart } from "../../context/CartContext";

const Modal = ({ isModalOpen, handleModalClose, product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdditionalText, setAdditionalText] = useState(false);
  const [descriptionClass, setDescriptionClass] = useState(
    "modal__btn active-btn ",
  );
  const [additionalClass, setAdditionalClass] = useState(
    "modal__btn not-active-btn",
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

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: Number(quantity),
    });
    handleModalClose();
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
            src={`${API_LINK}${product.image}`}
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
          <p className="modal__text">{MODAL.text}</p>

          <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
            <label>{MODAL.quantity}</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Button text={"Add"} handler={handleAddToCart} />
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
          <p className="modal__description">{MODAL.description}</p>
        )}
        {isAdditionalText && (
          <p className="modal__additional">{MODAL.additionalText}</p>
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
