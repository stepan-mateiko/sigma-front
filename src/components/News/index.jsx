import { NewsIcon } from "../Icon";
import Button from "../Button";
import ElementHeader from "../ElementHeader";

import {
  NEWS_HEADER,
  NEWS_CARDS,
  NEWS_BUTTON,
  SUBSCRIBE_SECTION,
} from "../../helpers/constants";

const News = () => {
  return (
    <div className="news">
      <ElementHeader
        className={NEWS_HEADER.className}
        title={NEWS_HEADER.title}
        heading={NEWS_HEADER.heading}
      />

      <div className="news__wrapper">
        {NEWS_CARDS.map(({ image, imageAlt, date, author, heading, text }) => (
          <div className="news__card" key={heading}>
            <img src={image} alt={imageAlt} className="news__image" />

            <p className="news__date">{date}</p>

            <div className="news__card-inner">
              <p className="news__card-name">
                <NewsIcon />
                {author}
              </p>

              <h4 className="news__card-heading">{heading}</h4>

              <p className="news__card-text">{text}</p>

              <Button {...NEWS_BUTTON} />
            </div>
          </div>
        ))}
      </div>

      <div className="subscribe">
        <img
          src={SUBSCRIBE_SECTION.image.src}
          alt={SUBSCRIBE_SECTION.image.alt}
          className="subscribe__image"
        />

        <h2 className="subscribe__heading">{SUBSCRIBE_SECTION.heading}</h2>

        <form className="subscribe__form">
          <input
            type={SUBSCRIBE_SECTION.input.type}
            placeholder={SUBSCRIBE_SECTION.input.placeholder}
          />
          <Button {...SUBSCRIBE_SECTION.button} />
        </form>
      </div>
    </div>
  );
};

export default News;
