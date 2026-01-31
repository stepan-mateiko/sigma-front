import Button from "../Button";
import ElementHeader from "../ElementHeader";

const StartScreen = () => {
  return (
    <div className="start">
      <ElementHeader
        className={"start"}
        title={"100% Natural Food"}
        heading={" Choose the best healthier way of life"}
      />
      <div className="start__wrapper">
        <div className="start__card start__card-1">
          <p className="start__card-title">Natural!!</p>
          <h3 className="start__card-heading">Get Garden Fresh Fruits</h3>
        </div>
        <div className="start__card start__card-2">
          <p className="start__card-title">Offer!!</p>
          <h3 className="start__card-heading">Get 10% off on Vegetables</h3>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
