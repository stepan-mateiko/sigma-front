import EcoImage from "../../assets/images/eco-image.png";
import EcoCard1 from "../../assets/images/eco-card-1.png";
import EcoCard2 from "../../assets/images/eco-card-2.png";
import EcoCard3 from "../../assets/images/eco-card-3.png";

const Eco = () => {
  return (
    <div className="eco">
      <div className="eco__header">
        <img src={EcoImage} alt="eco image" className="eco__image" />
        <div className="eco__container">
          <div className="eco__info">
            <p className="eco__title">Eco Friendly</p>
            <h2 className="eco__heading">Econis is a Friendly Organic Store</h2>
            <div className="eco__card">
              <h4 className="eco__card-title">Start with Our Company First</h4>
              <p className="eco__card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="eco__card">
              <h4 className="eco__card-title">Learn How to Grow Yourself</h4>
              <p className="eco__card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="eco__card">
              <h4 className="eco__card-title">Farming Strategies of Today</h4>
              <p className="eco__card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="eco__wrapper">
        <div className="eco__wrapper-card">
          <img src={EcoCard1} alt="eco card image 1" />
          <h4 className="eco__wrapper-heading">Organic Juice</h4>
        </div>
        <div className="eco__wrapper-card">
          <img src={EcoCard2} alt="eco card image 2" />
          <h4 className="eco__wrapper-heading">Organic Food</h4>
        </div>
        <div className="eco__wrapper-card">
          <img src={EcoCard3} alt="eco card image 3" />
          <h4 className="eco__wrapper-heading">Nuts Cookies</h4>
        </div>
      </div>
    </div>
  );
};

export default Eco;
