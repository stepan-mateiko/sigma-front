import {
  ECO_HEADER,
  ECO_INFO_CARDS,
  ECO_WRAPPER_CARDS,
} from "../../helpers/constants";

const Eco = () => {
  return (
    <div className="eco">
      <div className="eco__header">
        <img
          src={ECO_HEADER.image.src}
          alt={ECO_HEADER.image.alt}
          className="eco__image"
        />

        <div className="eco__container">
          <div className="eco__info">
            <p className="eco__title">{ECO_HEADER.title}</p>
            <h2 className="eco__heading">{ECO_HEADER.heading}</h2>

            {ECO_INFO_CARDS.map(({ title, text }) => (
              <div className="eco__card" key={title}>
                <h4 className="eco__card-title">{title}</h4>
                <p className="eco__card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="eco__wrapper">
        {ECO_WRAPPER_CARDS.map(({ image, alt, heading }) => (
          <div className="eco__wrapper-card" key={heading}>
            <img src={image} alt={alt} />
            <h4 className="eco__wrapper-heading">{heading}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eco;
