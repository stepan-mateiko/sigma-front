import AboutImage from "../../assets/images/about-us-image.png";
import { AboutIcon1, AboutIcon2 } from "../Icon";
import Button from "../Button";
import ElementHeader from "../ElementHeader";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={AboutImage} alt="about image" />
      </div>
      <div className="about__info">
        <ElementHeader
          className={"about"}
          title={"About Us"}
          heading={"We Believe in Working Accredited Farmers"}
        />
        <p className="about__text">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="about__wrapper">
          <div className="about__card">
            <AboutIcon1 className="about__card-icon" />
            <h4 className="about__card-heading">Organic Foods Only</h4>
            <p className="about__card-text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
          <div className="about__card">
            <AboutIcon2 className="about__card-icon" />
            <h4 className="about__card-heading">Quality Standards</h4>
            <p className="about__card-text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <Button className={"about__btn"} text={"Shop Now"} arrow={true} />
      </div>
    </div>
  );
};

export default AboutUs;
