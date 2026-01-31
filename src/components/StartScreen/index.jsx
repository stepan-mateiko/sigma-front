import ElementHeader from "../ElementHeader";
import { START_HEADER, START_CARDS } from "../../helpers/constants";

const StartScreen = () => {
  return (
    <div className="start">
      <ElementHeader
        className={START_HEADER.className}
        title={START_HEADER.title}
        heading={START_HEADER.heading}
      />

      <div className="start__wrapper">
        {START_CARDS.map(({ id, className, title, heading }) => (
          <div className={className} key={id}>
            <p className="start__card-title">{title}</p>
            <h3 className="start__card-heading">{heading}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartScreen;
