import NewsCard1 from "../../assets/images/news-card-1.png";
import NewsCard2 from "../../assets/images/news-card-2.png";
import SubscribeImage from "../../assets/images/subscribe-image.png";
import { NewsIcon } from "../Icon";
import Button from "../Button";
import ElementHeader from "../ElementHeader";

const News = () => {
  return (
    <div className="news">
      <ElementHeader
        className={"news"}
        title={"News"}
        heading={"Discover weekly content about organic food, & more"}
      />
      <div className="news__wrapper">
        <div className="news__card">
          <img src={NewsCard1} alt="news card 1" className="news__image" />
          <p className="news__date">25 Nov</p>
          <div className="news__card-inner">
            <p className="news__card-name">
              <NewsIcon />
              By Rachi Card
            </p>
            <h4 className="news__card-heading">
              The Benefits of Vitamin D & How to Get It
            </h4>
            <p className="news__card-text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <Button
              className={"news__card-btn"}
              text={"Read More"}
              arrow={true}
            />
          </div>
        </div>
        <div className="news__card">
          <img src={NewsCard2} alt="news card 2" className="news__image" />
          <p className="news__date">25 Nov</p>
          <div className="news__card-inner">
            <p className="news__card-name">
              <NewsIcon />
              By Rachi Card
            </p>
            <h4 className="news__card-heading">
              Our Favourite Summertime Tommeto
            </h4>
            <p className="news__card-text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <Button
              className={"news__card-btn"}
              text={"Read More"}
              arrow={true}
            />
          </div>
        </div>
      </div>
      <div className="subscribe">
        <img
          src={SubscribeImage}
          alt="subscribe image"
          className="subscribe__image"
        />
        <h2 className="subscribe__heading">Subscribe to our Newsletter</h2>
        <form className="subscribe__form">
          <input type="email" placeholder="Your Email Address" />
          <Button text={"Subscribe"} />
        </form>
      </div>
    </div>
  );
};

export default News;
