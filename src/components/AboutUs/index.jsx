import {
  ABOUT_IMAGE,
  ABOUT_HEADER,
  ABOUT_DESCRIPTION,
  ABOUT_CARDS,
  ABOUT_BUTTON,
} from "../../helpers/constants";

import Button from "../Button";
import ElementHeader from "../ElementHeader";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} />
      </div>

      <div className="about__info">
        <ElementHeader
          className={ABOUT_HEADER.className}
          title={ABOUT_HEADER.title}
          heading={ABOUT_HEADER.heading}
        />

        <p className="about__text">{ABOUT_DESCRIPTION}</p>

        <div className="about__wrapper">
          {ABOUT_CARDS.map(({ Icon, heading, text }) => (
            <div className="about__card" key={heading}>
              <Icon className="about__card-icon" />
              <h4 className="about__card-heading">{heading}</h4>
              <p className="about__card-text">{text}</p>
            </div>
          ))}
        </div>

        <Button {...ABOUT_BUTTON} />
      </div>
    </div>
  );
};

export default AboutUs;
